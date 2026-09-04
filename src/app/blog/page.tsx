import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { BlogGrid } from "@/components/sites/paulmartyn/BlogGrid";
import { BLOG_POSTS } from "@/components/sites/paulmartyn/blogPosts";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Building Advice for Cranleigh Homeowners | Paul Martyn",
  description:
    "Plain-English answers to the questions Cranleigh homeowners actually ask — Waverley planning, conservation areas, surveys, foundations, building control and costs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Building advice & news | Paul Martyn",
    description:
      "Plain-English answers to the questions Cranleigh homeowners actually ask, from a family-run builder on Bridge Road.",
    images: [OG_IMAGE],
  },
};

/**
 * Blog schema.
 *
 * Declares each post as a BlogPosting so search engines can read the list as
 * articles rather than as one page of mixed text. Since 2026-09-04 each post
 * has a real page at /blog/{slug}, so these are real URLs rather than the
 * anchors they used to be — which is what lets a post rank as itself. The
 * post pages carry their own Article, BreadcrumbList and FAQPage schema.
 */
const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Paul Martyn — building advice & news",
  url: `${SITE_URL}/blog`,
  inLanguage: "en-GB",
  publisher: { "@type": "Organization", name: "Paul Martyn" },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    articleSection: post.category,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Paul Martyn" },
  })),
};

export default function BlogPage() {
  return (
    <PageShell eyebrow="Advice & news" title="Building advice & news">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOG_SCHEMA) }}
      />

      <section className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <p className="max-w-[820px] text-[21px] font-normal leading-[32px] text-pm-ink">
            Practical, detailed answers to the questions we get asked on site in
            Cranleigh — Waverley planning and the settlement boundary, the
            conservation area, foundations on Weald Clay, party wall notices,
            building control and what things actually cost. Written for
            homeowners, not for builders, and written by the people doing the
            work.
          </p>

          <p className="mt-6 max-w-[820px] text-[17px] font-normal leading-[29px] text-pm-slate">
            We are a family-run firm on Bridge Road, and most of what is here
            comes from jobs in this town.{" "}
            <Link
              href="/areas/cranleigh"
              className="text-pm-teal underline decoration-pm-teal/40 underline-offset-[3px] transition-colors hover:text-pm-gold hover:decoration-pm-gold"
            >
              More about what we do as builders in Cranleigh
            </Link>
            .
          </p>

          <div className="mt-14">
            <BlogGrid />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
