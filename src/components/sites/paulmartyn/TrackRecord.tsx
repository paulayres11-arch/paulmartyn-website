"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "./content";
import { ArrowRightIcon, StarIcon } from "./shared/icons";

/**
 * Testimonial banner — the reference site's `.bg-2` band (#073538).
 *
 * Standing heading left, one quote right, next-arrow far right.
 * Quotes AUTO-ADVANCE every 6s with a horizontal slide, pausing on hover/focus
 * and disabled entirely under prefers-reduced-motion. The arrow still steps
 * manually and restarts the timer.
 *
 * Placeholder state is per item: an approved quote shows five stars, an
 * unapproved one shows an "Awaiting client approval" chip instead. Stars above
 * an unconfirmed quote would invent a rating.
 */
const INTERVAL_MS = 6000;

export function TrackRecord() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.items.length;
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    if (paused || reduceMotion.current || total < 2) return;
    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, next, total]);

  return (
    <section
      id="testimonials"
      className="flex min-h-[363px] scroll-mt-[80px] items-center bg-pm-teal-dark py-[54px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto flex w-full max-w-[2000px] flex-col gap-10 px-[3%] md:flex-row md:items-center md:gap-16">
        <h3 className="t-h3 max-w-[11ch] font-medium text-white md:w-[34%] md:shrink-0">
          {TESTIMONIALS.heading}
        </h3>

        <div className="flex min-w-0 flex-1 items-center gap-8">
          {/* Viewport */}
          <div
            className="min-w-0 flex-1 overflow-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.items.map((item, i) => (
                <figure
                  key={item.author}
                  className="w-full shrink-0 pr-8"
                  aria-hidden={i !== index}
                >
                  {item.isPlaceholder ? (
                    <p className="mb-4 inline-block border border-white/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[1.5px] text-white/80">
                      Awaiting client approval
                    </p>
                  ) : (
                    <div
                      className="mb-4 flex gap-1"
                      aria-label={`${item.stars ?? 5} out of 5`}
                    >
                      {Array.from({ length: item.stars ?? 5 }).map((_, s) => (
                        <StarIcon key={s} className="h-[18px] w-[18px] text-white" />
                      ))}
                    </div>
                  )}

                  {item.title ? (
                    <p className="text-[33px] font-medium leading-[1.15] text-white">
                      {item.title}
                    </p>
                  ) : null}

                  <blockquote className="mt-4 max-w-[640px] text-[17px] font-light leading-[26px] text-white">
                    {item.body}
                  </blockquote>

                  <figcaption className="mt-5 text-[15px] font-bold uppercase tracking-[1.5px] text-white">
                    {item.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="group shrink-0 text-white outline-none focus-visible:opacity-70"
          >
            {/* Motion instead of a focus box: the arrow travels right on hover,
                focus and click, then eases back — echoing the slide it triggers. */}
            <ArrowRightIcon className="pm-arrow h-[38px] w-[38px] will-change-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
