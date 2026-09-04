import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import {
  BlogArticleBody,
  BlogContents,
  readingMinutes,
} from "@/components/sites/paulmartyn/BlogArticle";
import { BLOG_POSTS } from "@/components/sites/paulmartyn/blogPosts";
import { CONTACT } from "@/components/sites/paulmartyn/content";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

/**
 * One page per post.
 *
 * Until 2026-09-04 every post lived on /blog and expanded in place, so fifteen
 * different subjects shared one URL and one title tag. A page can only rank for
 * what its URL and title are about, so the blog could not rank for any of them:
 * the only thing in the sitemap was /blog, headed "Building advice & news",
 * which nobody searches for.
 *
 * Each post is now its own indexable page with its own title, description,
 * canonical, Article schema and FAQ block. The grid on /blog stays exactly as
 * it looked — it is now an index that links here rather than an accordion.
 *
 * Old inbound links to /blog#slug still land on the index and scroll to the
 * card, so nothing that was shared before this change breaks.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function findPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.seoTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [OG_IMAGE.url],
    },
  };
}

const ukDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const related = (post.related ?? [])
    .map((relatedSlug) => findPost(relatedSlug))
    .filter((candidate): candidate is (typeof BLOG_POSTS)[number] => Boolean(candidate));

  /**
   * Article, FAQPage and BreadcrumbList in one graph.
   *
   * `mainEntityOfPage` is the post's own URL now that it has one, and the
   * publisher carries the same `@id` as the LocalBusiness on the home and
   * Cranleigh pages, so every post reinforces the one business entity rather
   * than looking like content from an unrelated publisher.
   */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        articleSection: post.category,
        inLanguage: "en-GB",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
        author: { "@type": "Organization", name: "Paul Martyn", "@id": `${SITE_URL}/#business` },
        publisher: { "@type": "Organization", name: "Paul Martyn", "@id": `${SITE_URL}/#business` },
        image: `${SITE_URL}${OG_IMAGE.url}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Advice & news", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
      },
      ...(post.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <PageShell eyebrow={post.category} title={post.title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[1100px] px-[6%] lg:px-0">
          {/* Breadcrumb, visible as well as in schema — it is the fastest way
              back to the index and it tells Google how the site nests. */}
          <nav aria-label="Breadcrumb" className="text-[14px] text-pm-slate">
            <Link href="/" className="transition-colors hover:text-pm-gold">
              Home
            </Link>
            <span className="px-2 text-pm-rule">/</span>
            <Link href="/blog" className="transition-colors hover:text-pm-gold">
              Advice &amp; news
            </Link>
            <span className="px-2 text-pm-rule">/</span>
            <span className="text-pm-ink">{post.category}</span>
          </nav>

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-medium uppercase tracking-[1px] text-pm-gold">
            {post.category}
            <span className="font-normal normal-case tracking-normal text-pm-slate">
              <time dateTime={post.date}>{ukDate(post.date)}</time>
              {post.updated ? ` · updated ${ukDate(post.updated)}` : null}
              {` · ${readingMinutes(post)} min read`}
            </span>
          </p>

          <p className="mt-6 max-w-[70ch] text-[21px] font-normal leading-[33px] text-pm-ink">
            {post.excerpt}
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="order-2 max-w-[72ch] lg:order-1">
              <BlogArticleBody post={post} />

              {post.faqs?.length ? (
                <section className="mt-16">
                  <h2
                    id="questions-we-get-asked"
                    className="scroll-mt-[110px] text-[26px] font-medium leading-[34px] text-pm-ink sm:text-[30px] sm:leading-[38px]"
                  >
                    Questions we get asked
                  </h2>

                  <dl className="mt-6 divide-y divide-pm-rule border-y border-pm-rule">
                    {post.faqs.map((faq) => (
                      <div key={faq.question} className="py-6">
                        <dt className="text-[18px] font-medium leading-[27px] text-pm-ink">
                          {faq.question}
                        </dt>
                        <dd className="mt-3 text-[17px] font-normal leading-[29px] text-pm-slate">
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ) : null}

              {/* The commercial payload of the whole page. A homeowner who has
                  read 1,500 words on their own problem is the warmest lead
                  this site gets, and the local phrasing is deliberate. */}
              <section className="mt-14 border border-pm-rule bg-[#f6f8f8] p-8">
                <h2 className="text-[24px] font-medium leading-[32px] text-pm-ink">
                  Talk it through with a builder in Cranleigh
                </h2>
                <p className="mt-4 max-w-[62ch] text-[17px] font-normal leading-[29px] text-pm-slate">
                  We are a family-run building firm on Bridge Road, Cranleigh, and we
                  have been doing this kind of work in this town and the villages
                  around it for years. If you want a second opinion on a quote, a
                  realistic budget before you commit, or a fixed price for the job
                  itself, the first conversation costs nothing.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex h-[52px] items-center bg-pm-teal px-6 text-[15px] font-normal text-white transition-colors hover:bg-pm-gold"
                  >
                    Get a quote
                  </Link>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex h-[52px] items-center border border-pm-ink px-6 text-[15px] font-normal text-pm-ink transition-colors hover:border-pm-gold hover:text-pm-gold"
                  >
                    Call {CONTACT.phone}
                  </a>
                </div>
              </section>

              {related.length ? (
                <section className="mt-16">
                  <h2 className="text-[24px] font-medium leading-[32px] text-pm-ink">
                    Read next
                  </h2>
                  <ul className="mt-6 divide-y divide-pm-rule border-y border-pm-rule">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="group block py-5"
                        >
                          <span className="text-[12px] font-medium uppercase tracking-[1px] text-pm-gold">
                            {item.category}
                          </span>
                          <span className="mt-2 block text-[19px] font-medium leading-[27px] text-pm-ink transition-colors group-hover:text-pm-gold">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            <aside className="order-1 space-y-8 lg:sticky lg:top-[100px] lg:order-2">
              <div
                className="block aspect-square w-full overflow-hidden bg-[#1f2a30] [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
                role="img"
                aria-label={post.imageAlt}
              >
                {post.art}
              </div>

              <BlogContents post={post} />

              <div className="border border-pm-rule bg-white p-7">
                <p className="text-[13px] font-medium uppercase tracking-[1px] text-pm-gold">
                  Local pages
                </p>
                <ul className="mt-4 space-y-2.5 text-[16px] leading-[24px]">
                  <li>
                    <Link href="/areas/cranleigh" className="text-pm-slate transition-colors hover:text-pm-gold">
                      Builders in Cranleigh
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/renovations-extensions" className="text-pm-slate transition-colors hover:text-pm-gold">
                      Extensions &amp; renovations
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/house-extension-costs-surrey" className="text-pm-slate transition-colors hover:text-pm-gold">
                      What an extension costs
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-pm-slate transition-colors hover:text-pm-gold">
                      Our prices
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
