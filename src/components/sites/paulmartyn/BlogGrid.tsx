import Link from "next/link";
import { BLOG_POSTS } from "./blogPosts";
import { readingMinutes } from "./BlogArticle";
import { ChevronDownIcon } from "./shared/icons";

/**
 * Blog index — three cards per row, each linking to the post's own page.
 *
 * This used to be an accordion: clicking a card expanded it in place and every
 * post shared the /blog URL. That was the single biggest thing holding the blog
 * back in search. Fifteen subjects on one URL means one title tag, one
 * canonical and one entry in the sitemap, so no post could rank for its own
 * subject however good the writing was — and the posts were three paragraphs
 * long, which gave Google nothing to rank even if they had.
 *
 * The card itself is unchanged: same square infographic, same meta line, same
 * type. Only the behaviour changed — click navigates instead of expanding — so
 * this is now a plain server component with no state and no JavaScript.
 */
export function BlogGrid() {
  return (
    <div className="grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
      {BLOG_POSTS.map((post) => (
        <article
          key={post.slug}
          id={post.slug}
          className="scroll-mt-[100px] border border-pm-rule bg-white transition-colors"
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group block h-full w-full text-left"
          >
            <span
              className="block aspect-square w-full overflow-hidden bg-[#1f2a30] [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
              role="img"
              aria-label={post.imageAlt}
            >
              {post.art}
            </span>

            <span className="block p-6">
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium uppercase tracking-[1px] text-pm-gold">
                {post.category}
                <span className="font-normal text-pm-slate">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </span>

              <span className="mt-3 block text-[19px] font-medium leading-[25px] text-pm-ink transition-colors group-hover:text-pm-gold">
                {post.title}
              </span>

              {/* The excerpt is here for the reader, but it is also the only
                  text a crawler sees on this page for each post now that the
                  bodies live on their own URLs. Keep it a real summary. */}
              <span className="mt-3 block text-[16px] font-normal leading-[26px] text-pm-slate">
                {post.excerpt}
              </span>

              <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-pm-ink">
                Read post
                <span className="font-normal text-pm-slate">
                  · {readingMinutes(post)} min
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 -rotate-90"
                />
              </span>
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}
