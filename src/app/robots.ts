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
    rules: [
      { userAgent: "*", allow: "/" },
      /**
       * AI search and answer engines, named explicitly so they are welcome
       * even where a blanket rule elsewhere might be read as excluding them.
       * These are the crawlers that fetch pages to answer a user's question
       * and cite the site — not the training crawlers (GPTBot, ClaudeBot,
       * Google-Extended), which Cloudflare's managed block above this file's
       * output still disallows. Note PerplexityBot is ALSO blocked at the
       * Cloudflare firewall (403) unless "Block AI bots" is turned off there;
       * robots.txt cannot override a firewall.
       */
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "Claude-SearchBot",
          "Claude-User",
          "Bingbot",
          "Applebot",
          "DuckAssistBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
