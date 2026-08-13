"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { BLOG_POSTS } from "./blogPosts";
import { ChevronDownIcon } from "./shared/icons";

/**
 * Blog card grid — three per row, click a card to open it, click again to close.
 *
 * An open card spans the full row rather than growing in place. At three
 * columns a post body would be squeezed into a ~360px measure, which is a
 * miserable read; full width lets the infographic sit beside the text at a
 * sensible line length. The grid reflows around it, which reads as deliberate.
 *
 * Only one post is open at a time. Every post's text stays in the DOM whether
 * open or closed — this page exists to be found in search, so hiding the copy
 * from crawlers would defeat the point of writing it.
 */
export function BlogGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
      {BLOG_POSTS.map((post) => {
        const isOpen = open === post.slug;

        return (
          <article
            key={post.slug}
            id={post.slug}
            className={cn(
              "scroll-mt-[100px] border border-pm-rule bg-white transition-colors",
              isOpen && "sm:col-span-2 lg:col-span-3",
            )}
          >
            <div className={cn(isOpen && "lg:flex lg:items-start lg:gap-10")}>
              {/* Square infographic + title: the closed state of the card. */}
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : post.slug)}
                aria-expanded={isOpen}
                aria-controls={`${post.slug}-body`}
                className={cn(
                  "group block w-full text-left",
                  isOpen && "lg:w-[42%] lg:shrink-0",
                )}
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

                  <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-pm-ink">
                    {isOpen ? "Close" : "Read post"}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none",
                        isOpen && "rotate-180",
                      )}
                    />
                  </span>
                </span>
              </button>

              {/* Body. Collapsed with CSS rather than unmounted, so it stays
                  crawlable and findable with in-page search. */}
              <div
                id={`${post.slug}-body`}
                className={cn(
                  "grid transition-[grid-template-rows] duration-400 ease-out motion-reduce:transition-none",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  isOpen && "lg:flex-1 lg:self-center",
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden",
                    !isOpen && "invisible",
                  )}
                >
                  <div className="px-6 pb-8 lg:pl-0 lg:pr-10">
                    <h3 className="hidden text-[24px] font-medium leading-[30px] text-pm-ink lg:block">
                      {post.title}
                    </h3>

                    {post.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className={cn(
                          "max-w-[70ch] text-[17px] font-normal leading-[27px] text-pm-slate",
                          i === 0 ? "lg:mt-5" : "mt-5",
                        )}
                      >
                        {paragraph}
                      </p>
                    ))}

                    <a
                      href="/contact"
                      className="mt-7 inline-flex h-[52px] items-center bg-pm-teal px-6 text-[15px] font-normal text-white transition-colors hover:bg-pm-gold"
                    >
                      Talk to us about your project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
