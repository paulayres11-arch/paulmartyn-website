"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { PRICING } from "./content";

/**
 * Price-band accordion.
 *
 * Open row is gold with white text and an up chevron; closed rows are white
 * with a down chevron, matching the reference. Panels animate via
 * grid-template-rows 0fr -> 1fr so they size to their content.
 *
 * Only one band is open at a time. Bands carry their pricing either as a
 * `rate`, a `range`, or inside their own body copy — where none is set, no
 * placeholder is shown.
 */
export function PricingAccordion() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="border border-pm-rule bg-white">
      {PRICING.bands.map((band, i) => {
        const isOpen = i === open;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={band.label} className={cn(i > 0 && "border-t border-pm-rule")}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-5 px-[19px] py-4 text-left transition-colors",
                  isOpen
                    ? "bg-pm-gold text-white"
                    : "bg-white text-pm-ink hover:bg-pm-cream",
                )}
              >
                <span className="text-[15px] font-bold leading-[19px]">
                  {band.label}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={cn(
                    "h-[16px] w-[16px] shrink-0 transition-transform duration-300 motion-reduce:transition-none",
                    isOpen && "rotate-180",
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-400 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-[19px] pb-[19px] pt-4">
                  {band.body.map((paragraph, b) => (
                    <p
                      key={b}
                      className={cn(
                        "max-w-[760px] text-[13px] font-normal leading-[20px] text-pm-slate",
                        b > 0 && "mt-3",
                      )}
                    >
                      {emphasise(paragraph, band.emphasise)}
                    </p>
                  ))}

                  {band.rate ? (
                    <p className="mt-4 text-[13px] font-normal leading-[20px] text-pm-ink">
                      Approximately{" "}
                      <strong className="font-bold">{band.rate}</strong>.
                    </p>
                  ) : band.range ? (
                    <p className="mt-4 text-[13px] font-normal leading-[20px] text-pm-ink">
                      Most projects fall between{" "}
                      <strong className="font-bold">{band.range}</strong>{" "}
                      depending on size, design and specification.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Renders `text` with any listed phrases in bold — used so price figures stand
 * out inside body copy, matching the bold treatment on `rate` and `range`.
 */
function emphasise(text: string, phrases?: string[]) {
  if (!phrases?.length) return text;

  const pattern = new RegExp(
    `(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );

  return text.split(pattern).map((part, i) =>
    phrases.includes(part) ? (
      <strong key={i} className="font-bold text-pm-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
