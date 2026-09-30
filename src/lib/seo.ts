import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";

const BRAND = "Paul Martyn Construction";

/**
 * Metadata for a content page.
 *
 * `title` is WITHOUT the brand: the root layout's template appends
 * " | Paul Martyn Construction". Keep title + suffix under 60 characters.
 * Open Graph titles are not templated by Next, so the brand is added there by
 * hand. `OG_IMAGE` is spread in because a child `openGraph` replaces the
 * layout's wholesale (see src/lib/site.ts).
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const fullTitle = `${title} | ${BRAND}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
