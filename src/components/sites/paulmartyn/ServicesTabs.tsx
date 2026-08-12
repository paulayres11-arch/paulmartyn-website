"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SERVICES } from "./content";
import { GalleryRail } from "./GalleryRail";
import { ChevronDownIcon } from "./shared/icons";

/**
 * Sections 7 + 8 — "Our Services". CLICK-DRIVEN, one open at a time.
 *
 * Two layouts from one structure, because the desktop pattern does not survive
 * a phone. At md+ it is the reference site's tab strip: a 4-column pill row
 * with the open pane beneath it. Below md the pills stack into nine full-width
 * blocks — around 750px of them — which pushed the pane so far below the fold
 * that tapping a service looked like it did nothing at all.
 *
 * So on mobile it is an accordion: the pane sits in DOM order immediately after
 * the button that opened it, and `md:order-last` moves it to the end of the
 * grid at desktop widths. Same markup, no duplicated galleries.
 *
 * Active pill   #cea66d, white text.
 * Inactive pill #265457, white text.
 * "All services" is an outline link to /services, not a tab.
 * Pane transition: opacity 0 -> 1 over 0.15s linear.
 */
export function ServicesTabs() {
  const [active, setActive] = useState(0);

  const paneRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  /** Only scroll in response to a tap, never on first render. */
  const tappedRef = useRef(false);

  /**
   * Keep what was opened in view.
   *
   * On mobile the tapped button is scrolled to the top of the viewport so its
   * pane fills the screen beneath it — otherwise opening a service near the
   * bottom of the list just pushes the content off-screen again, which is the
   * original bug in a new costume.
   *
   * On desktop the pane is already visible below the pill row, so it only
   * scrolls when genuinely out of view rather than jerking on every click.
   */
  useEffect(() => {
    if (!tappedRef.current) return;
    tappedRef.current = false;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior = reduced ? ("auto" as const) : ("smooth" as const);
    const accordion = window.matchMedia("(max-width: 767px)").matches;

    const target = accordion ? buttonRefs.current[active] : paneRef.current;
    if (!target) return;

    if (!accordion) {
      const belowTheFold =
        target.getBoundingClientRect().top > window.innerHeight * 0.6;
      if (!belowTheFold) return;
    }

    target.scrollIntoView({ behavior, block: "start" });
  }, [active]);

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
          className="h-[320px] bg-cover bg-center sm:h-[440px] md:h-[575px] md:w-7/12"
          style={{ backgroundImage: `url(${SERVICES.homeImage})` }}
          role="img"
          aria-label="Barn-conversion restaurant fit-out, with exposed timber trusses, a white-painted vaulted roof and oak flooring"
        />
      </div>

      {/* Block B — pills, with the open pane living inside the same grid.
          Keeping the pane in the grid is what lets one markup structure be an
          accordion on a phone and a tab strip on a desktop: it sits in DOM
          order right after the button that opened it (accordion), and
          `md:order-last` moves it to the end of the grid at desktop widths,
          where it reads as the pane below the pill row. */}
      <div className="mx-auto max-w-[2000px] px-[3%] pb-[10vh]">
        <div className="grid gap-[25px] sm:grid-cols-2 md:grid-cols-4">
          {SERVICES.tabs.map((tab, i) => {
            const open = i === active;

            return (
              <Fragment key={tab.id}>
                <button
                  type="button"
                  id={`tab-${tab.id}`}
                  ref={(el) => {
                    buttonRefs.current[i] = el;
                  }}
                  aria-expanded={open}
                  aria-controls={tab.id}
                  onClick={() => {
                    tappedRef.current = true;
                    setActive(i);
                  }}
                  className={cn(
                    /* scroll-mt clears the 69px sticky header when the button
                       is scrolled to the top in the accordion layout. */
                    "flex h-[58px] scroll-mt-[85px] items-center justify-center gap-2 px-4 text-[15px] font-normal leading-[19.5px] text-white transition-colors",
                    open ? "bg-pm-gold" : "bg-pm-teal hover:bg-pm-gold",
                  )}
                >
                  {tab.label}
                  {/* Only meaningful in the accordion layout — at md+ the pane
                      is not beneath its own button, so a caret would mislead. */}
                  <ChevronDownIcon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform md:hidden",
                      open && "rotate-180",
                    )}
                  />
                </button>

                {open ? (
                  <div
                    id={tab.id}
                    ref={paneRef}
                    role="region"
                    aria-labelledby={`tab-${tab.id}`}
                    className="col-span-full flex scroll-mt-[85px] flex-col gap-12 animate-[pm-fade-in_0.15s_linear] md:order-last md:mt-[35px] md:flex-row md:items-center md:gap-24"
                  >
                    {tab.gallery?.length ? (
                      <GalleryRail
                        images={tab.gallery}
                        fill
                        className="aspect-square w-full shrink-0 md:w-[44.1%]"
                      />
                    ) : (
                      <div
                        className="aspect-square w-full shrink-0 bg-cover bg-center md:w-[44.1%]"
                        style={{ backgroundImage: `url(${tab.image})` }}
                        role="img"
                        aria-label={tab.imageAlt ?? tab.heading}
                      />
                    )}

                    <div className="md:w-1/2">
                      <h3 className="t-h3 font-medium text-pm-ink">
                        {tab.heading}
                      </h3>
                      <p className="mt-8 max-w-[430px] text-[15px] font-normal leading-[22.5px] text-pm-slate md:mt-[52px]">
                        {tab.body}
                      </p>
                      <a
                        href={tab.path}
                        className="mt-8 inline-block text-[15px] font-medium text-pm-ink transition-colors hover:text-pm-gold md:mt-[52px]"
                      >
                        {tab.linkLabel}
                      </a>
                    </div>
                  </div>
                ) : null}
              </Fragment>
            );
          })}

          <a
            href={SERVICES.viewAll.path}
            className="flex h-[58px] items-center justify-center border border-pm-rule text-[15px] font-normal text-pm-ink transition-colors hover:border-pm-gold hover:text-pm-gold"
          >
            {SERVICES.viewAll.label}
          </a>
        </div>
      </div>
    </section>
  );
}
