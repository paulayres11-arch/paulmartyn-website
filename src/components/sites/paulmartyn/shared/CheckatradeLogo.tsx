import { cn } from "@/lib/utils";

/**
 * Checkatrade wordmark, set typographically in the brand colours with the
 * tick sitting over the C.
 *
 * Paul Martyn Construction is a listed member
 * (checkatrade.com/trades/paulmartynconstruction), so displaying the mark is
 * legitimate. Do not show it if membership lapses.
 *
 * Built as markup rather than reusing the raster from the reference site, which
 * was the older "Checkatrade.com — Where reputation matters" lockup on a white
 * JPEG background. Swap in the official SVG if the brand pack is available.
 */
const RED = "#EF4136";
const NAVY = "#141B4D";

export function CheckatradeLogo({
  className,
  title = "Checkatrade",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block whitespace-nowrap font-bold leading-none tracking-[-0.02em]",
        className,
      )}
      role="img"
      aria-label={title}
    >
      {/* Tick over the C */}
      <svg
        viewBox="0 0 14 10"
        aria-hidden="true"
        className="absolute left-[-0.01em] top-[-0.30em] h-[0.56em] w-[0.86em]"
        fill="none"
        stroke={NAVY}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 5.2 5 8.5 12.5 1.5" />
      </svg>

      <span style={{ color: RED }}>Check</span>
      <span style={{ color: NAVY }}>atrade</span>
    </span>
  );
}
