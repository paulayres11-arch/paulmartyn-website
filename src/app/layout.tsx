import type { Metadata } from "next";
import "./globals.css";

/**
 * No webfont is loaded here on purpose.
 *
 * The type stack names `articulat-cf` first, but it is not licensed for this
 * site and no matching @font-face is served, so the pages render in the system
 * sans-serif (Helvetica on macOS) — which is what the design was measured
 * against. Keep articulat-cf first so the type upgrades if it is ever licensed.
 * See docs/research/paulmartyn/DESIGN_TOKENS.md
 */

export const metadata: Metadata = {
  title: "Paul Martyn | Builders in the Surrey Hills",
  description:
    "Family-run builders in the Surrey Hills. Residential renovations, new builds, listed buildings and commercial projects across Surrey and the South East.",
  /**
   * PREVIEW ONLY — REMOVE BEFORE LAUNCH.
   *
   * Keeps the shareable preview out of Google. Indexing an unfinished site
   * splits ranking signals with the real domain later and can leave stale
   * pages in results. Delete this `robots` block when the site goes live.
   */
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
