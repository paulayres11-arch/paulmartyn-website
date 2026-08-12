import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  /**
   * Redirects from the old Squarespace URLs.
   *
   * Permanent (308) so Google transfers the ranking of the old page to the new
   * one and updates its index. Anyone with an old bookmark or an old search
   * result lands in the right place instead of a 404.
   *
   * Only the two pages that had real content are mapped. /new-blog, /new-page
   * and /contact-artesia were leftover Squarespace template pages and are
   * deliberately left to 404 — redirecting junk URLs just keeps them alive.
   */
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
