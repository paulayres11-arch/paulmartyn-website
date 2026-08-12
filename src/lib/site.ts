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
  "/contact",
] as const;
