"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HERO } from "./content";

/**
 * Section 3 — hero. TIME-DRIVEN (Slick autoplay).
 *
 * Computed: height 600px. Two slides carrying identical copy; only the
 * background photograph differs. No dots, no arrows. Dark teal scrim over the
 * photo so the white type stays legible.
 * Heading: 68.4px / 500 / line-height 68.4px / #fff.
 */
const SLIDE_MS = 5000;

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % HERO.slides.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    /* No fixed height on phones. The header is absolutely positioned over this
       band, so the content reserves room for it with pt below sm and the band
       grows if the heading wraps to more lines. */
    <section className="relative overflow-hidden sm:h-[600px]">
      {HERO.slides.map((slide, i) => (
        <div
          key={slide.image}
          aria-hidden={i !== active}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            i === active ? "opacity-100" : "opacity-0",
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Scrim — computed rgba(1, 32, 34, 0.84) on the target */}
      <div className="absolute inset-0 bg-[rgba(1,32,34,0.84)]" />

      {/* Content sits low in the band: 258px from the top, 89px below the
          buttons at 600px tall. justify-end + pb reproduces that at any height.
          pt-[125px] below sm clears the 107px header that overlays this band —
          without it the heading runs through the wordmark and burger. */}
      <div className="relative mx-auto flex min-h-[600px] max-w-[2000px] flex-col justify-end px-[3%] pb-[56px] pt-[125px] sm:h-full sm:min-h-0 sm:pb-[89px] sm:pt-0">
        {/* The page h1. Styling is entirely in the classes, so this is a
            semantic change only — it looks exactly as it did. */}
        <h1 className="t-hero mb-[0.3em] max-w-[900px] pb-[0.12em] font-medium text-white">
          {HERO.heading}
        </h1>

        <p className="mb-[38px] max-w-[640px] text-[17px] font-light leading-[26px] text-white/90">
          {HERO.subheading}
        </p>

        {/* Full width on phones (two 196px buttons don't fit side by side, and
            stacked at that width they look stranded), designed size from sm. */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={HERO.primaryCta.path}
            className="flex h-[61px] w-full items-center justify-center bg-[rgba(38,84,87,0.85)] text-[15px] font-light text-white transition-colors hover:bg-[rgba(52,104,107,0.92)] sm:w-[196px]"
          >
            {HERO.primaryCta.label}
          </a>
          <a
            href={HERO.secondaryCta.path}
            className="flex h-[61px] w-full items-center justify-center bg-[rgba(38,84,87,0.85)] text-[15px] font-light text-white transition-colors hover:bg-[rgba(52,104,107,0.92)] sm:w-[196px]"
          >
            {HERO.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
