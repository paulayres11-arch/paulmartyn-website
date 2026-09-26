import { HERO } from "./content";
import { Logo } from "./shared/Logo";

/** 1.8x the header lockup (34px mark), at Paul's request. */
const BANNER_LOGO_HEIGHT = 34 * 1.8;

/**
 * Section 3 — hero. Photograph first, copy underneath.
 *
 * Reworked 2026-09-26 at Paul's request: the old version put the copy on top of
 * a slider behind an 84% teal scrim, so on landing the page read as all text.
 * Now the photo runs full-bleed with nothing over it but the header, and the
 * heading + buttons sit in a solid teal band directly below.
 *
 * The header is still absolutely positioned over this section (46px from the
 * page top, 107px tall), so the photo carries a short dark fade at the top to
 * keep the white nav and wordmark legible against sky and trees.
 */
export function Hero() {
  return (
    <section>
      <div className="relative h-[440px] overflow-hidden bg-pm-teal-dark sm:h-[72vh] sm:max-h-[860px] sm:min-h-[560px]">
        {/* Above the fold and the LCP element — load it eagerly and first. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.image.src}
          srcSet={HERO.image.srcSet}
          sizes="100vw"
          alt={HERO.image.alt}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-[rgba(1,32,34,0.72)] to-transparent" />
      </div>

      <div className="bg-pm-teal-dark">
        <div className="relative mx-auto max-w-[2000px] px-[3%] py-[56px] sm:py-[89px]">
          {/* The page h1. */}
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
              className="flex h-[61px] w-full items-center justify-center bg-pm-teal text-[15px] font-light text-white transition-colors hover:bg-[#34686b] sm:w-[196px]"
            >
              {HERO.primaryCta.label}
            </a>
            <a
              href={HERO.secondaryCta.path}
              className="flex h-[61px] w-full items-center justify-center bg-pm-teal text-[15px] font-light text-white transition-colors hover:bg-[#34686b] sm:w-[196px]"
            >
              {HERO.secondaryCta.label}
            </a>
          </div>

          {/* Gold-house lockup, bottom right, level with the buttons. Desktop
              only: at ~390px wide it can't share a phone-width row with them. */}
          <Logo
            height={BANNER_LOGO_HEIGHT}
            tone="white"
            markTone="gold"
            className="absolute bottom-[89px] right-[3%] hidden lg:inline-flex"
          />
        </div>
      </div>
    </section>
  );
}
