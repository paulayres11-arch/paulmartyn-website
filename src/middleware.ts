import { NextResponse, type NextRequest } from "next/server";
import { isIndexableHost } from "@/lib/site";

/**
 * Blocks search indexing on every host except the live domain.
 *
 * This used to be an env var (SITE_INDEXABLE) read inside the page metadata.
 * That could not work: every page here is statically prerendered, so the
 * variable was read at build time and its value baked into the HTML. Setting
 * it on the host at cutover changed nothing, and the site would have gone
 * live still telling Google "noindex, nofollow" — deindexing itself.
 *
 * Deciding from the request's Host header instead is evaluated per request,
 * so it cannot be stale. It is also self-correcting: the Railway preview URL
 * and any future preview host are noindex automatically, the live domain is
 * indexable automatically, and there is no variable to remember to flip.
 *
 * X-Robots-Tag is honoured by Google exactly like a robots meta tag, and
 * covers non-HTML responses (PDFs, images) that cannot carry one.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get("host");

  if (!isIndexableHost(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  /**
   * Everything except Next's build assets. robots.txt and sitemap.xml are
   * deliberately included: on a preview host the sitemap should be marked
   * noindex too, so a stray fetch cannot advertise preview URLs.
   */
  matcher: ["/((?!_next/static|_next/image).*)"],
};
