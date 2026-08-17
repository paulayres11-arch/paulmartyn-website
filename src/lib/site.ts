/**
 * The live site's canonical host.
 *
 * Google has the old Squarespace site indexed on the `www.` host: the apex
 * 301s to www and every canonical tag points at www. Keeping www canonical
 * through the cutover means the indexed URLs stay valid and no ranking signal
 * has to be re-pointed at a different hostname.
 */
export const CANONICAL_HOST = "www.paulmartynconstruction.com";

export const SITE_URL = `https://${CANONICAL_HOST}`;

/**
 * Whether a given request host may be indexed.
 *
 * Only the live domain is. The Railway preview URL, and any other host the
 * app is ever reachable on, is not — indexing a preview competes with the
 * live domain for the same content and leaves stale URLs in results.
 *
 * This is a runtime check on purpose. It was previously an env var read
 * inside statically prerendered page metadata, which baked the answer in at
 * build time; see src/middleware.ts.
 */
export function isIndexableHost(host: string | null | undefined): boolean {
  if (!host) return false;
  // Strip any port, and ignore case — Host headers are not normalised.
  const hostname = host.split(":")[0].toLowerCase();
  return hostname === CANONICAL_HOST;
}

/**
 * The default Open Graph / Twitter card image.
 *
 * Until 2026-08-17 no page emitted an `og:image` at all, so every share of
 * this site — WhatsApp, Facebook, LinkedIn, iMessage — rendered as a blank
 * card. For a builder who gets work by recommendation, that is the one SEO
 * defect a client actually sees.
 *
 * Cropped from the re-roof hero to 1200x630, the ratio the platforms expect.
 *
 * Every page that declares its own `openGraph` must spread this in itself:
 * Next merges metadata shallowly, so a child's `openGraph` object REPLACES
 * the layout's rather than inheriting its `images`.
 */
export const OG_IMAGE = {
  url: "/seo/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "A completed Paul Martyn re-roofing project in Surrey, with new clay tiles, a dormer and solar panels",
} as const;

/** Every indexable route, used to build the sitemap. */
export const ROUTES = [
  "/",
  "/about-us",
  "/services",
  "/services/renovations-extensions",
  "/services/new-builds",
  "/services/listed-buildings",
  "/services/commercial",
  "/services/kitchens",
  "/services/bathrooms",
  "/services/staircases",
  "/services/project-management",
  "/process",
  "/pricing",
  "/guides/house-extension-costs-surrey",
  "/blog",
  "/contact",
] as const;
