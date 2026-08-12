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
    <section className="relative h-[600px] overflow-hidden">
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
          buttons at 600px tall. justify-end + pb reproduces that at any height. */}
      <div className="relative mx-auto flex h-full max-w-[2000px] flex-col justify-end px-[3%] pb-[89px]">
        <h2 className="t-hero mb-[0.3em] max-w-[900px] pb-[0.12em] font-medium text-white">
          {HERO.heading}
        </h2>

        <p className="mb-[38px] max-w-[640px] text-[17px] font-light leading-[26px] text-white/90">
          {HERO.subheading}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={HERO.primaryCta.path}
            className="flex h-[61px] w-[196px] items-center justify-center bg-[rgba(38,84,87,0.85)] text-[15px] font-light text-white transition-colors hover:bg-[rgba(52,104,107,0.92)]"
          >
            {HERO.primaryCta.label}
          </a>
          <a
            href={HERO.secondaryCta.path}
            className="flex h-[61px] w-[196px] items-center justify-center bg-[rgba(38,84,87,0.85)] text-[15px] font-light text-white transition-colors hover:bg-[rgba(52,104,107,0.92)]"
          >
            {HERO.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
