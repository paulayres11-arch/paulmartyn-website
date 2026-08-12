import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Paul Martyn Construction mark — two overlapping house outlines whose inner
 * roof slopes cross to form a third house in the centre.
 *
 * Redrawn as vector from the supplied artwork so it stays crisp at any size and
 * inherits colour (`currentColor`) for use on both light and dark grounds.
 * Source raster kept at public/sites/.../shared/brand/logo-mark-source.png
 *
 * Geometry traced by pixel-measuring the supplied raster (91x53 bbox, aspect
 * 1.717) and scaling x4, so the viewBox exactly bounds the stroked artwork:
 *   apex y 12 · shoulder y 100 · base y 200 · stroke 24
 *   outer walls x 10 / 352 · apexes x 118 / 246 · centre walls x 136 / 224
 *   base segments [10-60] [136-224] [304-352]
 * The base is deliberately broken into three segments, as in the original.
 */
/**
 * Stroke weight, in viewBox units (mark is 370 wide).
 *
 * Pixel-measuring the supplied raster gave 10.2% (38 units), but that source is
 * only 91px wide so anti-aliasing inflates the apparent stroke — at 38 the
 * centre counters close up and the mark reads as a heavy blob. 24 (~6.5%)
 * matches the artwork's optical weight while keeping the counters open.
 */
const STROKE = 24;

export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 364 212"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {/* Left house */}
      <path d="M10 200 V100 L118 12 L224 100 V200" />
      {/* Right house */}
      <path d="M136 200 V100 L246 12 L352 100 V200" />
      {/* Broken base */}
      <path d="M10 200 H60" />
      <path d="M136 200 H224" />
      <path d="M304 200 H352" />
    </svg>
  );
}

/** viewBox aspect, stroke included: matches the artwork's measured 1.717. */
const MARK_ASPECT = 364 / 212;

/**
 * Lockup proportions measured from the supplied artwork:
 *   mark height : wordmark cap height = 3.4 : 1
 *   gap         : mark width          = 0.22 : 1
 * Cap height is ~0.72 of font-size for this grotesque, so
 *   font-size = height / (3.4 x 0.72) = height / 2.45
 */
const WORDMARK_RATIO = 2.45;
const GAP_RATIO = 0.22;

interface LogoProps {
  /** Mark height in px. Wordmark size and gap are derived from it. */
  height: number;
  /** Colour of the wordmark. */
  tone?: "ink" | "white";
  /**
   * Colour of the house mark. Gold reads well over the dark hero photograph;
   * everywhere else (white headers, the footer) the mark is ink.
   */
  markTone?: "gold" | "ink";
  className?: string;
  /** Hide the wordmark and show the mark alone (sticky header, favicon). */
  markOnly?: boolean;
}

/**
 * Full lockup: mark + letterspaced PAULMARTYN wordmark.
 *
 * Everything is driven off a single `height` so the mark and wordmark keep the
 * artwork's proportions at every size. Previously the wordmark was a fixed 19px
 * regardless of mark size, so the lockup drifted out of proportion when scaled.
 */
export function Logo({
  height,
  tone = "ink",
  markTone = "ink",
  className,
  markOnly = false,
}: LogoProps) {
  const markWidth = height * MARK_ASPECT;

  return (
    <span
      className={cn(
        "inline-flex items-center",
        tone === "white" ? "text-white" : "text-pm-ink",
        className,
      )}
      style={{ gap: markOnly ? undefined : `${markWidth * GAP_RATIO}px` }}
    >
      <LogoMark
        className={cn(
          "shrink-0",
          markTone === "gold" ? "text-pm-gold" : "text-pm-ink",
        )}
        style={{ height: `${height}px`, width: `${markWidth}px` }}
      />

      {markOnly ? null : (
        <span
          className="whitespace-nowrap font-medium leading-none tracking-[0.28em]"
          style={{ fontSize: `${height / WORDMARK_RATIO}px` }}
        >
          PAULMARTYN
        </span>
      )}
    </span>
  );
}
