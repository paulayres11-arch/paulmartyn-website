"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT } from "./content";

/**
 * Expanding enquiry form.
 *
 * No mail service is wired up yet, so rather than POST into the void (which
 * silently loses enquiries) this composes a structured mailto: to
 * CONTACT.email. That works today with zero backend.
 *
 * To upgrade to a proper server submission later:
 *   1. Add a POST route at src/app/api/contact/route.ts using Resend / Postmark
 *      / SES, reading the same field names as below.
 *   2. Replace `buildMailto` + the submit handler with a fetch to that route.
 *   3. Keep the honeypot check — it costs nothing and stops most bots.
 */

const PROJECT_TYPES = [
  "Renovation or extension",
  "New build",
  "Listed building / heritage",
  "Commercial, bar or hotel",
  "Project management only",
  "Not sure yet",
];

const BUDGETS = [
  "Under £50k",
  "£50k – £150k",
  "£150k – £500k",
  "£500k+",
  "Prefer to discuss",
];

interface Fields {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  budget: string;
  timing: string;
  message: string;
}

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  location: "",
  projectType: "",
  budget: "",
  timing: "",
  message: "",
};

function buildMailto(f: Fields) {
  const lines = [
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.phone && `Phone: ${f.phone}`,
    f.location && `Property location: ${f.location}`,
    f.projectType && `Project type: ${f.projectType}`,
    f.budget && `Budget range: ${f.budget}`,
    f.timing && `Timing: ${f.timing}`,
    "",
    f.message,
  ].filter(Boolean);

  const subject = `Website enquiry — ${f.name || "new enquiry"}`;
  return `${CONTACT.emailHref}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const panelId = useId();

  const set = (key: keyof Fields) => (value: string) =>
    setFields((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot
    openMail(buildMailto(fields));
    setSent(true);
  };

  return (
    <div className="mt-8 border-t border-pm-rule bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-5 p-6 text-left transition-colors hover:bg-white"
      >
        <span>
          <span className="block text-[19px] font-medium text-pm-ink">
            Send us a message
          </span>
          <span className="mt-1 block text-[15px] font-normal text-pm-slate">
            Tell us about the project and we&rsquo;ll come back to you.
          </span>
        </span>

        <span
          aria-hidden="true"
          className="grid h-[38px] w-[38px] shrink-0 place-items-center bg-pm-teal text-white"
        >
          {/* Rotate the glyph, not the box — rotating the container turned the
              square into a diamond. */}
          <svg
            viewBox="0 0 24 24"
            className={cn(
              "h-[18px] w-[18px] transition-transform duration-300 motion-reduce:transition-none",
              open && "rotate-45",
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      {/* grid-rows 0fr -> 1fr animates height without a hard-coded max-height */}
      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <form onSubmit={onSubmit} className="border-t border-pm-rule p-6">
            {/* honeypot — hidden from people, tempting to bots */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="grid gap-4">
              <Field label="Your name" required value={fields.name} onChange={set("name")} />
              <Field label="Email" type="email" required value={fields.email} onChange={set("email")} />
              <Field label="Phone" type="tel" value={fields.phone} onChange={set("phone")} />
              <Field label="Where is the property?" value={fields.location} onChange={set("location")} />

              <Select label="Project type" options={PROJECT_TYPES} value={fields.projectType} onChange={set("projectType")} />
              <Select label="Budget range" options={BUDGETS} value={fields.budget} onChange={set("budget")} />

              <div>
                <Field label="Rough timing" value={fields.timing} onChange={set("timing")} />
              </div>

              <div>
                <Label text="About the project" required />
                <textarea
                  required
                  rows={5}
                  value={fields.message}
                  onChange={(e) => set("message")(e.target.value)}
                  className="w-full border border-pm-rule bg-white px-4 py-3 text-[15px] text-pm-ink outline-none transition-colors focus:border-pm-teal"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="h-[52px] w-full bg-pm-teal text-[16.5px] font-bold text-white transition-colors hover:bg-pm-gold"
              >
                Send enquiry
              </button>

              <p className="max-w-[420px] text-[13.5px] font-normal leading-[20px] text-pm-slate">
                Opens in your email app so you keep a copy. Prefer to call?{" "}
                <a href={CONTACT.phoneHref} className="text-pm-ink hover:text-pm-gold">
                  {CONTACT.phone}
                </a>
              </p>
            </div>

            {sent ? (
              <p role="status" className="mt-5 border-l-4 border-pm-gold bg-pm-cream px-4 py-3 text-[15px] text-pm-ink">
                Your email app should have opened with the details filled in. If
                nothing happened, email{" "}
                <a href={CONTACT.emailHref} className="font-medium underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

/**
 * Opens the user's mail client without navigating the page.
 * (Assigning window.location.href works for mailto: too, but trips the Next
 * lint rule against location assignment and can leave the tab in a odd state.)
 */
function openMail(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="mb-2 block text-[13.5px] font-medium uppercase tracking-[1px] text-pm-slate">
      {text}
      {required ? <span className="text-pm-gold"> *</span> : null}
    </span>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}

function Field({ label, value, onChange, type = "text", required }: FieldProps) {
  return (
    <label className="block">
      <Label text={label} required={required} />
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[46px] w-full border border-pm-rule bg-white px-4 text-[15px] text-pm-ink outline-none transition-colors focus:border-pm-teal"
      />
    </label>
  );
}

function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <Label text={label} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[46px] w-full border border-pm-rule bg-white px-4 text-[15px] text-pm-ink outline-none transition-colors focus:border-pm-teal"
      >
        <option value="">Please choose…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
