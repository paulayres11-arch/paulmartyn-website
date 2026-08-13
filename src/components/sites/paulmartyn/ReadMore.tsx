"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "./shared/icons";

interface ReadMoreProps {
  children: React.ReactNode;
  /** Button text when collapsed. */
  label?: string;
  /** Button text when expanded. */
  collapseLabel?: string;
  className?: string;
}

/**
 * Collapsible block with a "Read more" toggle.
 *
 * The content stays in the DOM when collapsed and is hidden with CSS rather
 * than unmounted. That matters for two reasons: Google indexes it either way,
 * so nothing is lost from a page that earns its traffic on this copy; and
 * anyone using in-page find (⌘F) can still hit words inside it.
 *
 * `grid-template-rows` 0fr -> 1fr animates to the content's own height without
 * needing a fixed max-height, matching PricingAccordion. `invisible` while
 * collapsed keeps the hidden text out of the tab order.
 */
export function ReadMore({
  children,
  label = "Read more",
  collapseLabel = "Show less",
  className,
}: ReadMoreProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={className}>
      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-400 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div
          className={cn(
            "overflow-hidden transition-opacity duration-300 motion-reduce:transition-none",
            open ? "opacity-100" : "invisible opacity-0",
          )}
        >
          {children}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-pm-ink transition-colors hover:text-pm-gold"
      >
        {open ? collapseLabel : label}
        <ChevronDownIcon
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none",
            open && "rotate-180",
          )}
        />
      </button>
    </div>
  );
}
