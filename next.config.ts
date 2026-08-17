import type { NextConfig } from "next";

/**
 * Redirects from the old Squarespace URLs.
 *
 * Taken from the old site's own sitemap.xml (18 URLs), captured while it was
 * still live rather than guessed — the slugs are not predictable, and the
 * ones that matter are not the ones the names suggest.
 *
 * Permanent (308) so Google transfers ranking to the new page and updates its
 * index, and anyone holding an old bookmark or search result lands somewhere
 * real instead of on a 404.
 */
const OLD_SITE_REDIRECTS = [
  // Real pages with a direct equivalent.
  { source: "/about", destination: "/about-us", permanent: true },
  { source: "/contact-us", destination: "/contact", permanent: true },

  // Squarespace served the homepage at /home as well as /, and
  // /paumartynconstruction (sic — the typo is theirs) was a duplicate of it.
  { source: "/home", destination: "/", permanent: true },
  { source: "/paumartynconstruction", destination: "/", permanent: true },

  /**
   * /new-page was titled "OUR WORK" — the portfolio page, not a leftover
   * template page as the slug implies. /services is its closest equivalent
   * here: it is the page that shows the work, broken down by discipline.
   */
  { source: "/new-page", destination: "/services", permanent: true },

  /**
   * The one genuine article on the old blog: ~1,900 words on 2025 extension
   * costs with real Surrey project figures. It is the strongest search entry
   * point the old site had, so it has been ported to /guides/... rather than
   * dropped, and both the post and the blog index point at it.
   */
  {
    source:
      "/new-blog/2025/4/27/how-much-does-a-house-extension-cost-in-2025-real-examples-from-surrey",
    destination: "/guides/house-extension-costs-surrey",
    permanent: true,
  },
  {
    source: "/new-blog",
    destination: "/guides/house-extension-costs-surrey",
    permanent: true,
  },
  {
    source: "/new-blog-2",
    destination: "/guides/house-extension-costs-surrey",
    permanent: true,
  },

  // Contact details lived here on the old site.
  { source: "/location", destination: "/contact", permanent: true },

  /**
   * Added 2026-08-17, after a live Google search showed the old Squarespace
   * sitelinks — "OUR WORK", "CONSTRUCTION", "Design&BUILD" — still in the
   * index, pointing at pages that now 404.
   *
   * `/new-cover-page` is confirmed: it is in the Wayback Machine's record of
   * the old site and was missing from the 18-URL map above. Squarespace cover
   * pages are homepage-style splash pages, so it goes to `/`.
   *
   * The rest are defensive. The sitelink LABELS are old page titles and the
   * URLs behind them cannot be read out of a search result, so these are the
   * slugs those titles would most likely have had. They all 404 today, so a
   * redirect can only be an improvement — nobody lands worse off than they
   * already do. If Search Console later shows the real slugs under Pages ->
   * Not found (404), replace these with the actual ones.
   */
  { source: "/new-cover-page", destination: "/", permanent: true },
  { source: "/our-work", destination: "/services", permanent: true },
  { source: "/construction", destination: "/services", permanent: true },
  {
    source: "/design-build",
    destination: "/services/renovations-extensions",
    permanent: true,
  },
  {
    source: "/designbuild",
    destination: "/services/renovations-extensions",
    permanent: true,
  },
  {
    source: "/design-and-build",
    destination: "/services/renovations-extensions",
    permanent: true,
  },

  /**
   * Deliberately NOT redirected, and left to 404:
   *   /amenities, /amenities-1, /contact-artesia, /event-calendar-artesia,
   *   /event-calendar-artesia/2016/5/13/lorem-ipsum-1-e268y,
   *   /policies-artesia, /terms-conditions-artesia
   * These are unedited pages from Squarespace's "Artesia" demo template —
   * one of them is still lorem ipsum. They describe a business that does not
   * exist. Redirecting them would keep dead URLs alive and point Google at
   * pages that never had anything to do with Paul Martyn; letting them 404 is
   * the correct signal and drops them from the index cleanly.
   */
];

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      /**
       * Force the apex onto www.
       *
       * Google has the old site indexed on www (its canonicals all point
       * there and the apex already 301s to www on Squarespace). Railway
       * serves both hosts identically, so without this the site would answer
       * on two hostnames at once and split its own ranking signals.
       */
      {
        source: "/:path*",
        has: [{ type: "host", value: "paulmartynconstruction.com" }],
        destination: "https://www.paulmartynconstruction.com/:path*",
        permanent: true,
      },
      ...OLD_SITE_REDIRECTS,
    ];
  },
};

export default nextConfig;
