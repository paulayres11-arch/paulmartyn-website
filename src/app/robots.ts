import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isIndexableHost, SITE_URL } from "@/lib/site";

/**
 * robots.txt.
 *
 * `force-dynamic` matters here. Without it Next prerenders this at build time
 * and the result is frozen into the image, which is how the previous env-var
 * switch silently failed. Reading the Host header forces per-request
 * evaluation, so the preview host serves "Disallow: /" and the live domain
 * serves the real thing, with nothing to toggle at cutover.
 */
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host");

  if (!isIndexableHost(host)) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
