import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { BlogGrid } from "@/components/sites/paulmartyn/BlogGrid";
import { BLOG_POSTS } from "@/components/sites/paulmartyn/blogPosts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Building advice & news | Paul Martyn",
  description:
    "Plain-English answers to the questions Surrey homeowners actually ask — planning, surveys, foundations, bathrooms, building control and costs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Building advice & news | Paul Martyn",
    description:
      "Plain-English answers to the questions Surrey homeowners actually ask, from a family-run builder in the Surrey Hills.",
  },
};

/**
 * Blog schema.
 *
 * Declares each post as a BlogPosting so search engines can read the list as
 * articles rather than as one page of mixed text. Posts live on this single
 * page for now, so each `url` is an anchor; if they ever get their own routes
 * these become real URLs and nothing else changes.
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
    url: `${SITE_URL}/blog#${post.slug}`,
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
          <p className="max-w-[760px] text-[21px] font-normal leading-[32px] text-pm-ink">
            Short, practical answers to the questions we get asked on site —
            planning and surveys, foundations, bathrooms, building control and
            what things actually cost. Written for homeowners, not for builders.
          </p>

          <div className="mt-14">
            <BlogGrid />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
