"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { REVIEWS } from "./content";
import { GoogleGIcon, StarIcon } from "./shared/icons";
import { CheckatradeLogo } from "./shared/CheckatradeLogo";

/**
 * Google / Checkatrade review slider.
 *
 * Card layout follows the Trustindex pattern: source badge, author, relative
 * date, star row, body, and prev/next controls outside the cards.
 *
 * Implemented as a native scroll-snap rail rather than a transform track, so
 * the number of visible cards can change responsively (1 / 2 / 3) without any
 * index maths, and it stays swipeable on touch.
 *
 * Cards flagged `isSample` render a "Sample" chip; real reviews render clean.
 * The section-level notice is derived from the data, so it disappears on its
 * own once every sample has been replaced with a real review.
 */
/** Milliseconds between slides. Matches GalleryRail. */
const AUTOPLAY_MS = 5000;

export function ReviewsSlider() {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [paused, setPaused] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    sync();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const step = useCallback((dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const amount = card ? card.offsetWidth + 25 : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  /**
   * Advance on its own, matching the galleries and the hero.
   *
   * Steps one card at a time and wraps at the end. Pauses on hover and on
   * focus so it cannot yank a review out from under someone mid-sentence —
   * these are paragraphs of text, not photographs, so an unstoppable carousel
   * is genuinely annoying here. Honours prefers-reduced-motion, and does
   * nothing when every card already fits on screen.
   */
  useEffect(() => {
    if (paused || REVIEWS.items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      const el = railRef.current;
      if (!el) return;
      // Nothing to scroll — all cards visible at this width.
      if (el.scrollWidth <= el.clientWidth + 2) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        step(1);
      }
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [paused, step]);

  return (
    <section id="reviews" className="scroll-mt-[80px] bg-pm-cream py-[10vh]">
      <div className="mx-auto max-w-[2000px] px-[3%]">
        <h3 className="t-h3 font-medium text-pm-ink">{REVIEWS.heading}</h3>
        <p className="mt-5 max-w-[640px] text-[17px] font-normal leading-[26px] text-pm-slate">
          {REVIEWS.standfirst}
        </p>

        {/* Derived from the data, so it can't go stale as real reviews land. */}
        {REVIEWS.items.some((r) => r.isSample) ? (
          <p className="mt-6 inline-block border-l-4 border-pm-gold bg-white px-4 py-2 text-[13px] font-medium uppercase tracking-[1px] text-pm-slate">
            {REVIEWS.items.every((r) => r.isSample)
              ? "Sample cards — connect a Google / Checkatrade feed to go live"
              : "Some cards are still samples — replace them with real reviews"}
          </p>
        ) : null}

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <div
            ref={railRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-[20px] overflow-x-auto scroll-smooth"
          >
            {REVIEWS.items.map((review, i) => (
              <article
                key={i}
                data-review-card
                className="flex min-h-[240px] w-[calc(100%-0px)] shrink-0 snap-start flex-col bg-white p-[26px] shadow-[0_1px_10px_rgba(0,0,0,0.06)] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    {/* Checkatrade leads with a score out of 10 and job type;
                        Google leads with the reviewer's name. */}
                    {review.score !== undefined ? (
                      <span
                        className="inline-flex h-[30px] min-w-[30px] items-center justify-center bg-pm-teal px-[7px] text-[12px] font-bold text-white"
                        aria-label={`Scored ${review.score} out of 10`}
                      >
                        {review.score}
                      </span>
                    ) : (
                      <p className="truncate text-[13px] font-bold text-pm-ink">
                        {review.author}
                      </p>
                    )}

                    {review.jobType ? (
                      <p className="mt-[6px] text-[10.5px] font-bold text-pm-ink">
                        {review.jobType}
                      </p>
                    ) : null}

                    <p className="mt-[3px] text-[11px] font-normal text-pm-slate">
                      {review.when}
                    </p>
                  </div>

                  {review.source === "google" ? (
                    <GoogleGIcon className="h-[19px] w-[19px] shrink-0" />
                  ) : (
                    <CheckatradeLogo className="shrink-0 text-[12px]" />
                  )}
                </div>

                {review.rating ? (
                  <div
                    className="mt-[13px] flex items-center gap-[3px]"
                    aria-label={`${review.rating} out of 5`}
                  >
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <StarIcon key={s} className="h-[14px] w-[14px] text-[#f5a623]" />
                    ))}
                  </div>
                ) : null}

                {review.title ? (
                  <p className="mt-[13px] text-[13.5px] font-bold leading-[19px] text-pm-ink">
                    {review.title}
                  </p>
                ) : null}

                <p className="mt-[9px] flex-1 whitespace-pre-line text-[13px] font-normal leading-[20px] text-pm-slate">
                  {review.body}
                </p>

                {review.verified || review.jobLocation || review.author ? (
                  <p className="mt-[16px] flex flex-wrap items-center gap-x-2 gap-y-[3px] border-t border-pm-rule pt-[13px] text-[10.5px] font-normal text-pm-slate">
                    {review.verified ? (
                      <span className="font-medium text-pm-teal">
                        ✓ Verified reviewer
                      </span>
                    ) : null}
                    {review.jobLocation ? (
                      <span>Job location: {review.jobLocation}</span>
                    ) : null}
                    {review.score !== undefined && review.author ? (
                      <span className="font-medium text-pm-ink">
                        {review.author}
                      </span>
                    ) : null}
                  </p>
                ) : null}

                {review.isSample ? (
                  <p className="mt-[16px] self-start border border-pm-rule px-[7px] py-[3px] text-[9px] font-medium uppercase tracking-[1px] text-pm-slate">
                    Sample
                  </p>
                ) : null}
              </article>
            ))}
          </div>

          {/* Controls sit outside the cards, as in the reference widget */}
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => step(-1)}
            disabled={atStart}
            className={cn(
              "absolute left-0 top-1/2 z-10 hidden h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-pm-teal text-white transition-opacity lg:flex",
              atStart ? "pointer-events-none opacity-0" : "opacity-100 hover:bg-pm-gold",
            )}
          >
            <Chevron className="h-[20px] w-[20px] rotate-180" />
          </button>

          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => step(1)}
            disabled={atEnd}
            className={cn(
              "absolute right-0 top-1/2 z-10 hidden h-[46px] w-[46px] -translate-y-1/2 translate-x-1/2 items-center justify-center bg-pm-teal text-white transition-opacity lg:flex",
              atEnd ? "pointer-events-none opacity-0" : "opacity-100 hover:bg-pm-gold",
            )}
          >
            <Chevron className="h-[20px] w-[20px]" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a
            href={REVIEWS.profiles.google}
            className="group inline-flex items-center gap-3 text-[15px] font-medium text-pm-ink transition-colors hover:text-pm-gold"
          >
            <GoogleGIcon className="h-[20px] w-[20px] shrink-0" />
            Read our Google reviews &gt;&gt;
          </a>
          <a
            href={REVIEWS.profiles.checkatrade}
            className="inline-flex items-center gap-3 text-[15px] font-medium text-pm-ink transition-colors hover:text-pm-gold"
          >
            <CheckatradeLogo className="shrink-0 text-[17px]" />
            <span>See our Checkatrade reviews &gt;&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}
