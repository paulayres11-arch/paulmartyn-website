import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/components/sites/paulmartyn/blogPosts";
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

  /**
   * The blog posts three times a week, so `/blog` — and the home page that
   * links to it — are the two URLs whose content genuinely moves. Declaring
   * them as `monthly` alongside the static service pages told Google the
   * opposite, and there was no `lastmod` anywhere to correct the impression.
   *
   * The newest post's date IS the blog's last-modified date, so it is derived
   * rather than hardcoded: a date someone has to remember to update is a date
   * that goes stale, and a stale `lastmod` is worse than none — Google learns
   * to distrust the whole file.
   */
  const latestPost = BLOG_POSTS.reduce(
    (newest, post) => (post.date > newest ? post.date : newest),
    BLOG_POSTS[0]?.date ?? "",
  );
  const blogUpdated = latestPost ? new Date(latestPost) : undefined;

  const changeFrequencyFor = (route: string) => {
    if (route === "/blog") return "weekly" as const;
    return "monthly" as const;
  };

  return ROUTES.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified: route === "/blog" ? blogUpdated : undefined,
    changeFrequency: changeFrequencyFor(route),
    priority: priorityFor(route),
  }));
}
