"use client";

/**
 * "Get a quote" button: a link to the /get-in-touch enquiry form.
 *
 * Until 29 Oct 2026 this opened a small mailto: dialog. That collected four
 * fields and none of the qualifying questions Sarah needs, so every quote
 * button now leads to the one enquiry form instead.
 */
interface QuoteLinkProps {
  /** Classes for the button, so the header keeps its own sizing. */
  className?: string;
  label?: string;
  /** Fired on click — the mobile nav uses it to close itself. */
  onOpen?: () => void;
}

export const ENQUIRY_PATH = "/get-in-touch";

export function QuoteLink({
  className,
  label = "Get a quote",
  onOpen,
}: QuoteLinkProps) {
  return (
    <a href={ENQUIRY_PATH} onClick={onOpen} className={className}>
      {label}
    </a>
  );
}
