import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

/**
 * sitemap.xml.
 *
 * The old Squarespace site had a sitemap listing 18 URLs, most of them unused
 * Artesia template pages. This lists only the 15 real pages, so the first
 * crawl after cutover sees a clean, accurate map of the site.
 *
 * Priorities mirror commercial intent: home and the extensions service page
 * carry the most weight, the cost guide next (it is the strongest search
 * entry point carried over from the old site), then everything else.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const priorityFor = (route: string) => {
    if (route === "/") return 1;
    if (route === "/services/renovations-extensions") return 0.9;
    if (route === "/guides/house-extension-costs-surrey") return 0.9;
    if (route === "/services" || route === "/contact") return 0.8;
    return 0.7;
  };

  return ROUTES.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    changeFrequency: "monthly" as const,
    priority: priorityFor(route),
  }));
}
