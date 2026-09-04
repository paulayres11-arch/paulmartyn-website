import type { Metadata } from "next";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
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
  /**
   * Resolves every relative canonical and og:url against the live www host.
   * Without this Next emits relative canonicals, which at cutover would leave
   * Google free to pick its own preferred host and split signals between the
   * apex and www versions of each page.
   */
  metadataBase: new URL(SITE_URL),
  /**
   * The home page title targets the town, not the county.
   *
   * It read "Surrey Builders" until 2026-09-04. "Surrey builders" is a term
   * this firm will never rank for — it competes with every contractor from
   * Staines to Haslemere — while "builders Cranleigh" and "Cranleigh builders"
   * describe a business that is physically at 1 Bridge Rd, Cranleigh, and are
   * what people here actually type. The home page is the strongest page on the
   * site, so it should carry the term the business can win.
   *
   * /areas/cranleigh is deliberately titled differently ("Builders in
   * Cranleigh, Surrey") so the two pages support the same entity without
   * competing for an identical string.
   */
  title: "Cranleigh Builders | Extensions, Renovations & New Builds | Paul Martyn",
  description:
    "Family-run builders based on Bridge Road, Cranleigh. Extensions, renovations, new builds, listed buildings and commercial work across Cranleigh, Surrey and the surrounding villages. Fixed price. Call 01483 612156.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Paul Martyn",
    locale: "en_GB",
    url: "/",
    title: "Paul Martyn | Builders in Cranleigh, Surrey",
    description:
      "Family-run builders based on Bridge Road, Cranleigh. Extensions, renovations, new builds, listed buildings and commercial work across Cranleigh and the surrounding villages.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Martyn | Builders in Cranleigh, Surrey",
    description:
      "Family-run builders based on Bridge Road, Cranleigh. Extensions, renovations, new builds, listed buildings and commercial work across Cranleigh and the surrounding villages.",
    images: [OG_IMAGE.url],
  },
  /**
   * No `robots` key on purpose.
   *
   * These pages are statically prerendered, so anything decided here is baked
   * into the HTML at build time — which is why the previous env-var switch
   * could not work. Indexing is controlled per request by the X-Robots-Tag
   * header in src/middleware.ts, keyed on the request host.
   */
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
