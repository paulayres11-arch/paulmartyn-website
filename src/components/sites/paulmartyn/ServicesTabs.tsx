"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SERVICES } from "./content";
import { GalleryRail } from "./GalleryRail";

/**
 * Sections 7 + 8 — "Our Services". CLICK-DRIVEN.
 *
 * Confirmed Bootstrap 5 tabs on the target: the pills carry data-bs-toggle="tab",
 * data-bs-target, role="tab" and aria-selected. There is no IntersectionObserver —
 * this is NOT scroll-driven.
 *
 * Active pill   #cea66d, white text.
 * Inactive pill #265457, white text.
 * "View all services" is an outline link to /services, not a tab.
 * Pane transition: Bootstrap .fade — opacity 0 -> 1 over 0.15s linear.
 */
export function ServicesTabs() {
  const [active, setActive] = useState(0);
  const pane = SERVICES.tabs[active];

  return (
    /* Two .sectionpad.zeropaddingtop blocks on the target: padding 0 0 10vh.
       Block A = copy + photo (686px), block B = pills + active pane (631px). */
    <section className="bg-white">
      {/* Block A */}
      <div className="mx-auto flex max-w-[2000px] flex-col gap-12 px-[3%] pb-[10vh] md:flex-row md:items-start md:gap-20">
        <div className="md:w-5/12">
          <h3 className="t-h3 font-medium text-pm-ink">{SERVICES.heading}</h3>
          {[SERVICES.lead, SERVICES.body[0]].map((paragraph, i) => (
            <p
              key={i}
              className={cn(
                "max-w-[360px] text-[15px] font-normal leading-[22.5px] text-pm-slate",
                i === 0 ? "mt-[42px]" : "mt-6",
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="h-[575px] bg-cover bg-center md:w-7/12"
          style={{ backgroundImage: `url(${SERVICES.image})` }}
          role="img"
          aria-label="Paul Martyn project"
        />
      </div>

      {/* Block B — pill row */}
      <div className="mx-auto max-w-[2000px] px-[3%]">
        <div
          role="tablist"
          aria-label="Our services"
          className="grid gap-[25px] sm:grid-cols-2 md:grid-cols-4"
        >
          {SERVICES.tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={i === active}
              aria-controls={tab.id}
              onClick={() => setActive(i)}
              className={cn(
                "h-[58px] text-[15px] font-normal leading-[19.5px] text-white transition-colors",
                i === active ? "bg-pm-gold" : "bg-pm-teal hover:bg-pm-gold",
              )}
            >
              {tab.label}
            </button>
          ))}

          <a
            href={SERVICES.viewAll.path}
            className="flex h-[58px] items-center justify-center border border-pm-rule text-[15px] font-normal text-pm-ink transition-colors hover:border-pm-gold hover:text-pm-gold"
          >
            {SERVICES.viewAll.label}
          </a>
        </div>
      </div>

      {/* Active pane */}
      <div
        key={pane.id}
        id={pane.id}
        role="tabpanel"
        aria-labelledby={`tab-${pane.id}`}
        className="mx-auto mt-[60px] flex max-w-[2000px] flex-col gap-12 px-[3%] pb-[10vh] animate-[pm-fade-in_0.15s_linear] md:flex-row md:items-center md:gap-24"
      >
        {pane.gallery?.length ? (
          <GalleryRail
            key={pane.id}
            images={pane.gallery}
            fill
            className="aspect-square w-full shrink-0 md:w-[44.1%]"
          />
        ) : (
          <div
            className="aspect-square w-full shrink-0 bg-cover bg-center md:w-[44.1%]"
            style={{ backgroundImage: `url(${pane.image})` }}
            role="img"
            aria-label={pane.heading}
          />
        )}

        <div className="md:w-1/2">
          <h3 className="t-h3 font-medium text-pm-ink">{pane.heading}</h3>
          <p className="mt-[52px] max-w-[430px] text-[15px] font-normal leading-[22.5px] text-pm-slate">
            {pane.body}
          </p>
          <a
            href={pane.path}
            className="mt-[52px] inline-block text-[15px] font-medium text-pm-ink transition-colors hover:text-pm-gold"
          >
            {pane.linkLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
