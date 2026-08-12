import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
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
  title: "Paul Martyn | Builders in the Surrey Hills",
  description:
    "Family-run builders in the Surrey Hills. Residential renovations, new builds, listed buildings and commercial projects across Surrey and the South East.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Paul Martyn",
    locale: "en_GB",
    url: "/",
    title: "Paul Martyn | Builders in the Surrey Hills",
    description:
      "Family-run builders in the Surrey Hills. Residential renovations, new builds, listed buildings and commercial projects across Surrey and the South East.",
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
