"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT } from "./content";

/**
 * "Get a quote" button that opens a compact enquiry dialog:
 * name, email, mobile, enquiry, send.
 *
 * Built on the native <dialog> element via showModal(), which gives focus
 * trapping, Escape-to-close, inertness of the page behind, and focus return
 * for free — all of which would otherwise need hand-rolling.
 *
 * Submission uses the same structured mailto: as the contact page form, so no
 * enquiry is silently lost while there's no mail service configured. See
 * ContactForm.tsx for the upgrade path to a server route.
 */
interface QuoteDialogProps {
  /** Classes for the trigger button, so the header keeps its own sizing. */
  className?: string;
  label?: string;
}

export function QuoteDialog({ className, label = "Get a quote" }: QuoteDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    mobile: "",
    enquiry: "",
  });
  const [honeypot, setHoneypot] = useState("");

  const open = () => {
    setSent(false);
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();

  // Clicking the backdrop (outside the panel) closes the dialog.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === el) el.close();
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  const set = (k: keyof typeof fields) => (v: string) =>
    setFields((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.mobile && `Mobile: ${fields.mobile}`,
      "",
      fields.enquiry,
    ]
      .filter(Boolean)
      .join("\n");

    openMail(
      `${CONTACT.emailHref}?subject=${encodeURIComponent(
        `Quote request — ${fields.name || "website"}`,
      )}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
  };

  return (
    <>
      <button type="button" onClick={open} className={className}>
        {label}
      </button>

      <dialog
        ref={ref}
        aria-labelledby="quote-dialog-title"
        className="pm-dialog w-[min(500px,92vw)] bg-white p-0 text-pm-ink backdrop:bg-[rgba(1,32,34,0.7)]"
      >
        <div className="border-t-4 border-pm-gold">
          <div className="flex items-start justify-between gap-5 px-6 pt-6">
            <div>
              <h2 id="quote-dialog-title" className="text-[26px] font-medium leading-[1.15]">
                Get a quote
              </h2>
              <p className="mt-1 text-[15px] font-normal leading-[21px] text-pm-slate">
                Tell us briefly what you&rsquo;re planning and we&rsquo;ll come
                back to you.
              </p>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid h-[34px] w-[34px] shrink-0 place-items-center bg-pm-cream text-pm-ink transition-colors hover:bg-pm-teal hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>

          <form onSubmit={onSubmit} className="px-6 pb-6 pt-5">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <Row label="Name" required value={fields.name} onChange={set("name")} autoFocus />
              <Row label="Email" type="email" required value={fields.email} onChange={set("email")} />
              <div className="sm:col-span-2">
                <Row label="Mobile" type="tel" value={fields.mobile} onChange={set("mobile")} />
              </div>

              <label className="block sm:col-span-2">
                <Cap text="Enquiry" required />
                <textarea
                  required
                  rows={3}
                  value={fields.enquiry}
                  onChange={(e) => set("enquiry")(e.target.value)}
                  className="w-full border border-pm-rule bg-white px-3 py-2 text-[15px] outline-none transition-colors focus:border-pm-teal"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-5 h-[50px] w-full bg-pm-teal text-[16.5px] font-bold text-white transition-colors hover:bg-pm-gold"
            >
              Send enquiry
            </button>

            <p className="mt-3 text-center text-[13.5px] font-normal leading-[19px] text-pm-slate">
              Or call{" "}
              <a href={CONTACT.phoneHref} className="text-pm-ink hover:text-pm-gold">
                {CONTACT.phone}
              </a>{" "}
              &middot; mobile{" "}
              <a href={CONTACT.mobileHref} className="text-pm-ink hover:text-pm-gold">
                {CONTACT.mobile}
              </a>
            </p>

            {sent ? (
              <p role="status" className="mt-4 border-l-4 border-pm-gold bg-pm-cream px-4 py-3 text-[14px]">
                Your email app should have opened with the details filled in. If
                not, email{" "}
                <a href={CONTACT.emailHref} className="font-medium underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            ) : null}
          </form>
        </div>
      </dialog>
    </>
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

function Cap({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="mb-1.5 block text-[13.5px] font-medium uppercase tracking-[1px] text-pm-slate">
      {text}
      {required ? <span className="text-pm-gold"> *</span> : null}
    </span>
  );
}

function Row({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoFocus,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <Cap text={label} required={required} />
      <input
        type={type}
        required={required}
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-[42px] w-full border border-pm-rule bg-white px-3 text-[15px] outline-none transition-colors focus:border-pm-teal",
        )}
      />
    </label>
  );
}
