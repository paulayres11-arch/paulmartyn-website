import nodemailer from "nodemailer";
import {
  EMPTY_ANSWERS,
  ENQUIRY_CC,
  ENQUIRY_TO,
  STEP_1_FIELDS,
  STEP_2_FIELDS,
  emailHtml,
  emailSubject,
  emailText,
  statusFor,
  validate,
  type EnquiryAnswers,
  type EnquiryMeta,
} from "@/components/sites/paulmartyn/enquiry/schema";

/**
 * POST /api/enquiry — sends the Get in touch hand-off email.
 *
 * Sent through Paul's own Google Workspace account over SMTP (Paul's choice,
 * 29 Oct 2026: no new email service). Configured entirely by env vars on
 * Railway — the repo is public, so nothing secret lives in it:
 *
 *   GMAIL_USER          the Workspace address it sends as (paul@...)
 *   GMAIL_APP_PASSWORD  a Google app password for that account
 *   ENQUIRY_TO          optional, comma-separated; defaults to Sarah
 *   ENQUIRY_CC          optional, comma-separated; defaults to Paul
 *   ENQUIRY_DRY_RUN=1   local testing: log the email instead of sending it
 *
 * Without the credentials this answers 503, and the form offers the client
 * a pre-filled email to send themselves, so no enquiry is lost.
 *
 * The status is worked out again here from the answers rather than trusted
 * from the browser, so the subject line Sarah sorts by cannot be spoofed.
 *
 * TODO(phase 2): also post the submission to the pipeline CRM
 * (pipeline-production-40d3.up.railway.app). Hook point marked below.
 */

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/** Basic per-IP rate limit. In memory: one Railway instance, so this is enough. */
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

/** Copies only known keys, with the right shape, so nothing else gets in. */
function readAnswers(raw: unknown): EnquiryAnswers {
  const src = (raw ?? {}) as Record<string, unknown>;
  const out = { ...EMPTY_ANSWERS } as Record<string, string | string[]>;
  for (const [key, empty] of Object.entries(EMPTY_ANSWERS)) {
    const v = src[key];
    if (Array.isArray(empty)) {
      out[key] = Array.isArray(v)
        ? v.filter((x): x is string => typeof x === "string").slice(0, 20)
        : [];
    } else {
      out[key] = typeof v === "string" ? v : "";
    }
  }
  return out as unknown as EnquiryAnswers;
}

function londonTimestamp(d = new Date()): string {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
      timeZoneName: "longOffset",
    })
      .formatToParts(d)
      .map((p) => [p.type, p.value]),
  );
  const offset = parts.timeZoneName.replace("GMT", "") || "+00:00";
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}${offset}`;
}

function sanitiseUtm(raw: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!raw || typeof raw !== "object") return out;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (/^utm_[a-z_]{1,20}$/.test(k) && typeof v === "string") {
      out[k] = v.slice(0, 200);
    }
  }
  return out;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: people never see this field. Pretend success so bots move on.
  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true });
  }

  if (rateLimited(clientIp(req))) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  const answers = readAnswers(body.answers);
  const step = body.step === 1 ? 1 : 2;
  const errors = validate(
    step === 1 ? STEP_1_FIELDS : [...STEP_1_FIELDS, ...STEP_2_FIELDS],
    answers,
  );
  const status = statusFor(answers, step);
  if (Object.keys(errors).length || !status) {
    return Response.json({ error: "invalid", errors }, { status: 422 });
  }

  const meta: EnquiryMeta = {
    status,
    submitted_at: londonTimestamp(),
    source_page:
      typeof body.source_page === "string" ? body.source_page.slice(0, 300) : "",
    utm: sanitiseUtm(body.utm),
  };

  const list = (v: string) =>
    v
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  const to = list(process.env.ENQUIRY_TO ?? ENQUIRY_TO);
  const cc = list(process.env.ENQUIRY_CC ?? ENQUIRY_CC);
  const message = {
    from: `"Paul Martyn Construction website" <${process.env.GMAIL_USER ?? "website@localhost"}>`,
    to,
    cc,
    replyTo: answers.email.trim(),
    subject: emailSubject(answers, status),
    text: emailText(answers, meta),
    html: emailHtml(answers, meta),
  };

  const dryRun = process.env.ENQUIRY_DRY_RUN === "1";
  if (!dryRun && !(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)) {
    console.error("enquiry: GMAIL_USER / GMAIL_APP_PASSWORD not set");
    return Response.json({ error: "not_configured", status }, { status: 503 });
  }

  try {
    const transport = dryRun
      ? nodemailer.createTransport({ jsonTransport: true })
      : nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });
    const info = await transport.sendMail(message);
    // jsonTransport returns the composed message as JSON on `message`.
    if (dryRun) console.log("enquiry (dry run):", (info as { message?: unknown }).message);
  } catch (err) {
    console.error("enquiry: send failed", err);
    return Response.json({ error: "send_failed", status }, { status: 502 });
  }

  // Phase 2 hook: post { answers, meta } to the pipeline CRM here.

  return Response.json({ ok: true, status });
}
