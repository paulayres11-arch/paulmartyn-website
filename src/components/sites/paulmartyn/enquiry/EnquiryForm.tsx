"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { BOOKING_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CONTACT } from "../content";
import {
  BUDGET_APPROACH,
  BUDGETS,
  DRAWINGS,
  EMPTY_ANSWERS,
  ENQUIRY_RECIPIENTS,
  FOUND_US,
  HOUSE_TYPES,
  LABELS,
  LISTED,
  OCCUPIED,
  OTHER_BUILDERS,
  PLANNING,
  PLANS_EMAIL,
  PRIORITIES,
  PRIORITY_COUNT,
  PROJECT_TYPES,
  PROPERTY_TYPES,
  ROOMS,
  START_IDEAL,
  STATUS_MESSAGES,
  STEP_1_FIELDS,
  STEP_2_FIELDS,
  STRUCTURAL,
  YES_NO,
  emailSubject,
  emailText,
  isShown,
  normalisePostcode,
  plansMailto,
  statusFor,
  validate,
  type EnquiryAnswers,
  type EnquiryStatus,
  type Errors,
  type FieldKey,
} from "./schema";

/**
 * Three-step enquiry and booking form: 1 Your details → 2 Your project →
 * 3 Book the call. Questions, rules and email format live in ./schema.ts.
 *
 * An enquiry is sent at the point its status is known — after step 1 for a
 * no-parking decline, after step 2 for everything else — so every lead
 * reaches Paul and Sarah even if the client never books.
 */

type Screen =
  | { kind: "step"; step: 1 | 2 | 3 }
  | { kind: "outcome"; status: Exclude<EnquiryStatus, "BOOKING"> };

type SendState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "failed"; status: EnquiryStatus };

const STEP_LABELS = ["Your details", "Your project", "Book the call"];

export function EnquiryForm() {
  const [answers, setAnswers] = useState<EnquiryAnswers>(EMPTY_ANSWERS);
  const [errors, setErrors] = useState<Errors>({});
  const [screen, setScreen] = useState<Screen>({ kind: "step", step: 1 });
  const [send, setSend] = useState<SendState>({ kind: "idle" });
  const [honeypot, setHoneypot] = useState("");
  const topRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // On every screen change, bring the top of the form into view and move
  // focus there, so screen-reader and phone users both start at the top.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    topRef.current?.focus({ preventScroll: true });
  }, [screen]);

  const set = <K extends FieldKey>(key: K, value: EnquiryAnswers[K]) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const showErrors = (errs: Errors) => {
    setErrors(errs);
    const first = [...STEP_1_FIELDS, ...STEP_2_FIELDS].find((k) => errs[k]);
    if (first) {
      const el = document.getElementById(`f-${first}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      el?.focus({ preventScroll: true });
    }
  };

  const goToOutcome = (status: EnquiryStatus) => {
    setSend({ kind: "idle" });
    setScreen(
      status === "BOOKING"
        ? { kind: "step", step: 3 }
        : { kind: "outcome", status },
    );
  };

  const submit = async (step: 1 | 2, status: EnquiryStatus) => {
    setSend({ kind: "sending" });
    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(
      [...params].filter(([k]) => k.startsWith("utm_")),
    );
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          step,
          answers,
          utm,
          // Path only: never echo a query string, which could carry data.
          source_page: window.location.origin + window.location.pathname,
          website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      goToOutcome(status);
    } catch {
      setSend({ kind: "failed", status });
    }
  };

  const onContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (screen.kind !== "step" || send.kind === "sending") return;
    if (screen.step === 1) {
      const errs = validate(STEP_1_FIELDS, answers);
      if (Object.keys(errs).length) return showErrors(errs);
      const status = statusFor(answers, 1);
      if (status) return void submit(1, status);
      setScreen({ kind: "step", step: 2 });
    } else if (screen.step === 2) {
      const errs = validate(STEP_2_FIELDS, answers);
      if (Object.keys(errs).length) return showErrors(errs);
      void submit(2, statusFor(answers, 2) ?? "BOOKING");
    }
  };

  const activeStep = screen.kind === "step" ? screen.step : null;

  return (
    <div
      ref={topRef}
      tabIndex={-1}
      className="mx-auto w-full max-w-[480px] scroll-mt-[110px] outline-none"
    >
      {activeStep ? <Progress active={activeStep} /> : null}

      {screen.kind === "outcome" ? (
        <Outcome status={screen.status} answers={answers} />
      ) : screen.step === 3 ? (
        <BookCall
          answers={answers}
          onBack={() => setScreen({ kind: "step", step: 2 })}
        />
      ) : (
        <form noValidate onSubmit={onContinue} className="mt-8">
          {/* Honeypot: hidden from people, tempting to bots. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label>
              Website
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>
          </div>

          {screen.step === 1 ? (
            <StepOne answers={answers} errors={errors} set={set} />
          ) : (
            <StepTwo answers={answers} errors={errors} set={set} />
          )}

          {Object.values(errors).some(Boolean) ? (
            <p role="alert" className="mt-6 text-[14px] text-(--pm-error)">
              Please check the answers marked above.
            </p>
          ) : null}

          {send.kind === "failed" ? (
            <SendFailed
              answers={answers}
              status={send.status}
              onRetry={() => submit(screen.step === 1 ? 1 : 2, send.status)}
              onEmailed={() => goToOutcome(send.status)}
            />
          ) : null}

          <button
            type="submit"
            disabled={send.kind === "sending"}
            className="pm-eq-btn mt-6"
          >
            {send.kind === "sending" ? "Sending…" : "Continue →"}
          </button>

          {screen.step === 2 ? (
            <BackLink onClick={() => setScreen({ kind: "step", step: 1 })} />
          ) : null}
        </form>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------- steps */

interface StepProps {
  answers: EnquiryAnswers;
  errors: Errors;
  set: <K extends FieldKey>(key: K, value: EnquiryAnswers[K]) => void;
}

function StepOne({ answers: a, errors, set }: StepProps) {
  const text = (key: FieldKey, props: Partial<TextProps> = {}) => (
    <TextField
      name={key}
      value={a[key] as string}
      error={errors[key]}
      onChange={(v) => set(key, v)}
      {...props}
    />
  );
  return (
    <>
      <Panel num="01" title="Name and contact">
        {text("first_name", { required: true, autoComplete: "given-name" })}
        {text("last_name", { required: true, autoComplete: "family-name" })}
        {text("email", { required: true, type: "email", autoComplete: "email" })}
        {text("mobile", { required: true, type: "tel", autoComplete: "tel" })}
        <Choice
          name="whatsapp_ok"
          options={YES_NO}
          value={a.whatsapp_ok}
          error={errors.whatsapp_ok}
          onChange={(v) => set("whatsapp_ok", v)}
          columns
          required
        />
      </Panel>

      <Panel num="02" title="Property details">
        {text("address_1", { required: true, autoComplete: "address-line1" })}
        {text("address_2", { autoComplete: "address-line2" })}
        {text("town", { required: true, autoComplete: "address-level2" })}
        <TextField
          name="postcode"
          value={a.postcode}
          error={errors.postcode}
          onChange={(v) => set("postcode", v)}
          onBlur={() => {
            const pc = normalisePostcode(a.postcode);
            if (pc) set("postcode", pc);
          }}
          autoComplete="postal-code"
          required
        />
        <Choice
          name="offroad_parking"
          options={YES_NO}
          value={a.offroad_parking}
          error={errors.offroad_parking}
          onChange={(v) => set("offroad_parking", v)}
          columns
          required
        />
      </Panel>

      <Panel num="03" title="Your project">
        <TextField
          name="project_summary"
          value={a.project_summary}
          error={errors.project_summary}
          onChange={(v) => set("project_summary", v)}
          placeholder="Please include as much detail as you can"
          multiline
          required
        />
        <SelectField
          name="found_us"
          options={FOUND_US}
          value={a.found_us}
          error={errors.found_us}
          onChange={(v) => set("found_us", v)}
          required
        />
        {isShown("recommended_by", a)
          ? text("recommended_by", { required: true })
          : null}
      </Panel>
    </>
  );
}

function StepTwo({ answers: a, errors, set }: StepProps) {
  const select = (key: FieldKey, options: readonly string[], required = true) => (
    <SelectField
      name={key}
      options={options}
      value={a[key] as string}
      error={errors[key]}
      onChange={(v) => set(key, v)}
      required={required}
    />
  );
  const radio = (key: FieldKey, options: readonly string[], columns = false) => (
    <Choice
      name={key}
      options={options}
      value={a[key] as string}
      error={errors[key]}
      onChange={(v) => set(key, v)}
      columns={columns}
      required
    />
  );
  const atLimit = a.priorities.length >= PRIORITY_COUNT;

  return (
    <>
      <Panel num="01" title="The work">
        <Checks
          name="project_type"
          options={PROJECT_TYPES}
          value={a.project_type}
          error={errors.project_type}
          onChange={(v) => set("project_type", v)}
          hint="Tick any that apply."
          required
        />
        <Checks
          name="rooms"
          options={ROOMS}
          value={a.rooms}
          error={errors.rooms}
          onChange={(v) => set("rooms", v)}
          hint="Tick any that apply."
        />
      </Panel>

      <Panel num="02" title="The property">
        {select("property_type", PROPERTY_TYPES)}
        {isShown("house_type", a) ? select("house_type", HOUSE_TYPES, false) : null}
        {select("listed_conservation", LISTED)}
        {radio("occupied_during", OCCUPIED, true)}
        <TextField
          name="constraints"
          value={a.constraints}
          error={errors.constraints}
          onChange={(v) => set("constraints", v)}
          placeholder="Access, neighbours, trees, drains, anything we should know"
          multiline
        />
      </Panel>

      <Panel num="03" title="Drawings and approvals">
        {radio("drawings", DRAWINGS)}
        {a.drawings && a.drawings !== "No" ? (
          <p className="text-[14px] leading-[1.5]">
            Thank you. At the end we&rsquo;ll give you a button to email your
            plans to Sarah at {PLANS_EMAIL}.
          </p>
        ) : null}
        {select("planning", PLANNING)}
        {select("structural", STRUCTURAL)}
      </Panel>

      <Panel num="04" title="Budget and timing">
        {select("budget", BUDGETS)}
        {radio("budget_approach", BUDGET_APPROACH)}
        {select("start_ideal", START_IDEAL)}
        <TextField
          name="start_latest"
          value={a.start_latest}
          error={errors.start_latest}
          onChange={(v) => set("start_latest", v)}
          type="date"
        />
      </Panel>

      <Panel num="05" title="What matters to you">
        <Checks
          name="priorities"
          options={PRIORITIES}
          value={a.priorities}
          error={errors.priorities}
          onChange={(v) => set("priorities", v)}
          hint={`${a.priorities.length} of ${PRIORITY_COUNT} picked.`}
          disableUnchecked={atLimit}
          required
        />
        {radio("other_builders", OTHER_BUILDERS)}
        <TextField
          name="anything_else"
          value={a.anything_else}
          error={errors.anything_else}
          onChange={(v) => set("anything_else", v)}
          multiline
        />
      </Panel>
    </>
  );
}

function BookCall({
  answers,
  onBack,
}: {
  answers: EnquiryAnswers;
  onBack: () => void;
}) {
  const embed = BOOKING_URL
    ? `${BOOKING_URL}${BOOKING_URL.includes("?") ? "&" : "?"}gv=true`
    : null;
  return (
    <section className="mt-8" aria-labelledby="book-heading">
      <h2
        id="book-heading"
        className="pm-enquiry-heading text-center text-[28px] leading-[1.15]"
      >
        Book your call with Paul
      </h2>
      <p className="mt-3 text-center text-[15px] leading-[1.55]">
        Pick a time for a WhatsApp video or voice call with Paul. We&rsquo;ll go
        through your project and talk you through our first feasibility
        estimate on the call.
      </p>

      <div className="pm-eq-panel mt-6 p-5">
        <p className="text-[15px] leading-[1.55] text-[#2b2f2a]">
          Please email your plans to Sarah at{" "}
          <a href={`mailto:${PLANS_EMAIL}`} className="font-medium text-(--pm-teal-dark) underline">
            {PLANS_EMAIL}
          </a>{" "}
          so Paul can prepare for the call.
        </p>
        <a href={plansMailto(answers)} className="pm-eq-btn mt-4">
          Email your plans to Sarah →
        </a>
      </div>

      {embed ? (
        <iframe
          src={embed}
          title="Book a call with Paul"
          className="pm-eq-frame mt-6 h-[640px] w-full bg-white"
        />
      ) : (
        <div className="pm-eq-panel mt-6 p-5 text-[15px] leading-[1.55]">
          Our online booking calendar is being set up. We&rsquo;ll email you
          within one working day to arrange a time for your call.
        </div>
      )}

      <p className="mt-4 text-center text-[14px] leading-[1.5]">
        Can&rsquo;t find a time that suits? Just reply to the email we send and
        we&rsquo;ll arrange one.
      </p>

      <BackLink onClick={onBack} />
    </section>
  );
}

function Outcome({
  status,
  answers,
}: {
  status: Exclude<EnquiryStatus, "BOOKING">;
  answers: EnquiryAnswers;
}) {
  return (
    <section role="status" className="pm-eq-panel mt-8 p-6">
      <p className="text-[16px] leading-[1.6] text-[#2b2f2a]">
        {STATUS_MESSAGES[status]}
      </p>
      {status === "NO PLANS" ? (
        <a href={plansMailto(answers)} className="pm-eq-btn mt-5">
          Email your plans to Sarah →
        </a>
      ) : null}
    </section>
  );
}

/**
 * Shown when the server could not send (not configured, Gmail down, offline).
 * The answers are still in the form; the client can retry, or send the same
 * text from their own email app so the enquiry is not lost.
 */
function SendFailed({
  answers,
  status,
  onRetry,
  onEmailed,
}: {
  answers: EnquiryAnswers;
  status: EnquiryStatus;
  onRetry: () => void;
  onEmailed: () => void;
}) {
  const body = emailText(answers, {
    status,
    submitted_at: new Date().toISOString(),
    source_page: window.location.origin + window.location.pathname,
    utm: {},
  });
  const [to, ...cc] = ENQUIRY_RECIPIENTS;
  const href = `mailto:${to}?cc=${cc.join(",")}&subject=${encodeURIComponent(
    emailSubject(answers, status),
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div role="alert" className="mt-6 border-l-4 border-(--pm-error) bg-white p-4 text-[14px] leading-[1.5]">
      <p className="text-[#2b2f2a]">
        Sorry, we couldn&rsquo;t send your answers just now. Your answers are
        still here. You can try again, or send them from your own email app.
      </p>
      <div className="mt-4 grid gap-3">
        <button type="button" onClick={onRetry} className="pm-eq-btn-outline">
          Try again
        </button>
        <a href={href} onClick={onEmailed} className="pm-eq-btn-outline">
          Send by email instead
        </a>
      </div>
      <p className="mt-3">
        Or call us on{" "}
        <a href={CONTACT.phoneHref} className="text-(--pm-teal-dark) underline">
          {CONTACT.phone}
        </a>
        .
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- building blocks */

function Progress({ active }: { active: 1 | 2 | 3 }) {
  return (
    <ol className="relative mx-auto flex max-w-[360px] justify-between" aria-label="Progress">
      <span aria-hidden="true" className="absolute top-[16px] right-[12%] left-[12%] h-px bg-(--pm-teal-light)" />
      {STEP_LABELS.map((label, i) => {
        const n = i + 1;
        const state = n === active ? "active" : n < active ? "done" : "upcoming";
        return (
          <li
            key={label}
            className="relative z-10 flex w-[33%] flex-col items-center gap-2 text-center"
            aria-current={state === "active" ? "step" : undefined}
          >
            <span className="pm-eq-step" data-state={state}>
              {n}
            </span>
            <span className="text-[12px] leading-tight text-(--pm-teal-text)">
              {label}
              {state === "done" ? <span className="sr-only"> (done)</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function Panel({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="mt-8 first:mt-0">
      <legend className="mb-3 text-[14px] font-medium tracking-[0.5px] text-(--pm-teal-text)">
        <span className="mr-2 font-semibold">{num}</span>
        {title}
      </legend>
      <div className="pm-eq-panel grid gap-5 p-5 sm:p-6">{children}</div>
    </fieldset>
  );
}

function Label({
  htmlFor,
  name,
  required,
  asLegend,
}: {
  htmlFor?: string;
  name: FieldKey;
  required?: boolean;
  asLegend?: boolean;
}) {
  const content = (
    <>
      {LABELS[name]}
      {required ? (
        <span className="text-(--pm-error)" aria-hidden="true">
          {" "}*
        </span>
      ) : null}
      {required ? <span className="sr-only"> (required)</span> : null}
    </>
  );
  const cls = "mb-[6px] block text-[13px] font-medium leading-[1.35] text-(--pm-teal-text)";
  return asLegend ? (
    <legend className={cls}>{content}</legend>
  ) : (
    <label htmlFor={htmlFor} className={cls}>
      {content}
    </label>
  );
}

function FieldError({ name, error }: { name: FieldKey; error?: string }) {
  return error ? (
    <p id={`e-${name}`} className="mt-[6px] text-[13px] leading-[1.4] text-(--pm-error)">
      {error}
    </p>
  ) : null;
}

const describedBy = (name: FieldKey, error?: string, hint?: boolean) =>
  [error && `e-${name}`, hint && `h-${name}`].filter(Boolean).join(" ") ||
  undefined;

interface TextProps {
  name: FieldKey;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  multiline?: boolean;
}

function TextField({
  name,
  value,
  onChange,
  onBlur,
  error,
  required,
  type = "text",
  autoComplete,
  placeholder,
  multiline,
}: TextProps) {
  const common = {
    id: `f-${name}`,
    name,
    value,
    placeholder,
    onBlur,
    "aria-invalid": error ? true : undefined,
    "aria-required": required || undefined,
    "aria-describedby": describedBy(name, error),
    className: "pm-eq-input",
  };
  return (
    <div>
      <Label htmlFor={`f-${name}`} name={name} required={required} />
      {multiline ? (
        <textarea {...common} rows={4} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input
          {...common}
          type={type}
          autoComplete={autoComplete}
          inputMode={type === "tel" ? "tel" : undefined}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <FieldError name={name} error={error} />
    </div>
  );
}

function SelectField({
  name,
  options,
  value,
  onChange,
  error,
  required,
}: {
  name: FieldKey;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={`f-${name}`} name={name} required={required} />
      <select
        id={`f-${name}`}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-required={required || undefined}
        aria-describedby={describedBy(name, error)}
        className="pm-eq-input"
      >
        <option value="">Please choose…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <FieldError name={name} error={error} />
    </div>
  );
}

/** Single choice shown as bordered boxes; `columns` puts them side by side. */
function Choice({
  name,
  options,
  value,
  onChange,
  error,
  required,
  columns,
}: {
  name: FieldKey;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  columns?: boolean;
}) {
  return (
    <fieldset
      className="pm-eq-group"
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(name, error)}
    >
      <Label name={name} required={required} asLegend />
      <div
        className={cn(
          "grid gap-2",
          columns && (options.length === 2 ? "grid-cols-2" : "grid-cols-3"),
        )}
      >
        {options.map((o, i) => (
          <label key={o} className="pm-eq-choice">
            <input
              type="radio"
              id={i === 0 ? `f-${name}` : undefined}
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
            />
            {o}
          </label>
        ))}
      </div>
      <FieldError name={name} error={error} />
    </fieldset>
  );
}

function Checks({
  name,
  options,
  value,
  onChange,
  error,
  required,
  hint,
  disableUnchecked,
}: {
  name: FieldKey;
  options: readonly string[];
  value: string[];
  onChange: (v: string[]) => void;
  error?: string;
  required?: boolean;
  hint?: string;
  disableUnchecked?: boolean;
}) {
  const toggle = (o: string) =>
    onChange(
      value.includes(o)
        ? value.filter((v) => v !== o)
        : // Keep the order of the options, not the order of ticking.
          options.filter((x) => x === o || value.includes(x)),
    );
  return (
    <fieldset
      className="pm-eq-group"
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(name, error, Boolean(hint))}
    >
      <Label name={name} required={required} asLegend />
      {hint ? (
        <p id={`h-${name}`} className="-mt-[2px] mb-2 text-[13px]" aria-live="polite">
          {hint}
        </p>
      ) : null}
      <div className="grid gap-2">
        {options.map((o, i) => {
          const checked = value.includes(o);
          return (
            <label key={o} className="pm-eq-choice">
              <input
                type="checkbox"
                id={i === 0 ? `f-${name}` : undefined}
                name={name}
                value={o}
                checked={checked}
                disabled={!checked && disableUnchecked}
                onChange={() => toggle(o)}
              />
              {o}
            </label>
          );
        })}
      </div>
      <FieldError name={name} error={error} />
    </fieldset>
  );
}

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto mt-5 block text-[14px] text-(--pm-teal-dark) underline underline-offset-2"
    >
      ← Back
    </button>
  );
}
