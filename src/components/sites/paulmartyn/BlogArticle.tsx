import { Fragment, type ReactNode } from "react";
import type { BlogBlock, BlogPost } from "@/types/paulmartyn";

/**
 * Renders one long-form post.
 *
 * Nothing here is a client component. The whole point of the rewrite is that
 * a post is a real, crawlable page of text at a real URL, so it is server
 * rendered end to end — no expand/collapse, no JavaScript needed to read it.
 *
 * Headings get stable ids so the contents list at the top can jump to them,
 * which also gives Google the sub-headings it uses to build sitelinks.
 */

/** Slug for an `h2`, so the contents list and the heading always agree. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Inline markup: `**bold**` and `[label](/path)`.
 *
 * A tiny parser rather than a markdown dependency — two constructs are all the
 * copy uses, and the internal links matter enough to be typed inline in the
 * sentence where they belong rather than bolted on at the end of a post.
 */
function renderInline(text: string): ReactNode {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return tokens.map((token, i) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-pm-ink">
          {token.slice(2, -2)}
        </strong>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          className="text-pm-teal underline decoration-pm-teal/40 underline-offset-[3px] transition-colors hover:text-pm-gold hover:decoration-pm-gold"
        >
          {link[1]}
        </a>
      );
    }

    return <Fragment key={i}>{token}</Fragment>;
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id ?? headingId(block.text)}
          className="mt-14 scroll-mt-[110px] text-[26px] font-medium leading-[34px] text-pm-ink first:mt-0 sm:text-[30px] sm:leading-[38px]"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="mt-9 text-[20px] font-medium leading-[28px] text-pm-ink">
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="mt-5 text-[17px] font-normal leading-[29px] text-pm-slate">
          {renderInline(block.text)}
        </p>
      );

    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 text-[17px] font-normal leading-[29px] text-pm-slate before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-pm-gold"
            >
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mt-5 space-y-4">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-11 text-[17px] font-normal leading-[29px] text-pm-slate"
            >
              <span className="absolute left-0 top-[2px] flex h-[26px] w-[26px] items-center justify-center bg-pm-ink text-[13px] font-medium text-white">
                {i + 1}
              </span>
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <figure className="mt-9 border-l-[3px] border-pm-gold bg-[#faf8f4] px-7 py-6">
          <blockquote className="text-[19px] font-normal leading-[31px] text-pm-ink">
            “{block.text}”
          </blockquote>
          <figcaption className="mt-4 text-[13px] font-medium uppercase tracking-[1px] text-pm-gold">
            {block.attribution}
          </figcaption>
        </figure>
      );

    case "callout":
      return (
        <aside className="mt-9 border border-pm-rule bg-[#f6f8f8] px-7 py-6">
          <p className="text-[13px] font-medium uppercase tracking-[1px] text-pm-gold">
            {block.title}
          </p>
          <p className="mt-3 text-[17px] font-normal leading-[29px] text-pm-ink">
            {renderInline(block.text)}
          </p>
        </aside>
      );

    case "table":
      return (
        <figure className="mt-9">
          {/* Cost tables are wide and phones are not. Scroll the table, never
              the page — a body that scrolls sideways feels broken. */}
          <div className="overflow-x-auto border border-pm-rule">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-pm-ink text-white">
                  {block.head.map((cell, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="px-5 py-3 text-[13px] font-medium uppercase tracking-[1px]"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-t border-pm-rule odd:bg-white even:bg-[#faf9f7]">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="px-5 py-4 align-top text-[16px] leading-[26px] text-pm-slate"
                      >
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? (
            <figcaption className="mt-3 text-[14px] leading-[22px] text-pm-slate">
              {renderInline(block.caption)}
            </figcaption>
          ) : null}
        </figure>
      );

    case "takeaways":
      return (
        <aside className="mt-2 border border-pm-rule bg-white p-7">
          <p className="text-[13px] font-medium uppercase tracking-[1px] text-pm-gold">
            The short version
          </p>
          <ul className="mt-4 space-y-3">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-[17px] font-normal leading-[28px] text-pm-ink before:absolute before:left-0 before:top-[11px] before:h-[6px] before:w-[6px] before:bg-pm-gold"
              >
                {renderInline(item)}
              </li>
            ))}
          </ul>
        </aside>
      );
  }
}

/** Roughly how long the post takes to read, at 220 words a minute. */
export function readingMinutes(post: BlogPost): number {
  const words = post.body.reduce((total, block) => {
    if (block.type === "table") {
      return total + [...block.head, ...block.rows.flat()].join(" ").split(/\s+/).length;
    }
    if ("items" in block) return total + block.items.join(" ").split(/\s+/).length;
    return total + block.text.split(/\s+/).length;
  }, 0);

  const faqWords = (post.faqs ?? []).reduce(
    (total, faq) => total + `${faq.question} ${faq.answer}`.split(/\s+/).length,
    0,
  );

  return Math.max(1, Math.round((words + faqWords) / 220));
}

export function BlogArticleBody({ post }: { post: BlogPost }) {
  return (
    <div>
      {post.body.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

/** The jump list, built from the post's own `h2`s. */
export function BlogContents({ post }: { post: BlogPost }) {
  const headings = post.body.filter(
    (block): block is Extract<BlogBlock, { type: "h2" }> => block.type === "h2",
  );

  if (headings.length < 3) return null;

  return (
    <nav aria-label="On this page" className="border border-pm-rule bg-[#faf9f7] p-7">
      <p className="text-[13px] font-medium uppercase tracking-[1px] text-pm-gold">
        On this page
      </p>
      <ol className="mt-4 space-y-2.5">
        {headings.map((heading, i) => (
          <li key={i}>
            <a
              href={`#${heading.id ?? headingId(heading.text)}`}
              className="text-[16px] leading-[24px] text-pm-slate transition-colors hover:text-pm-gold"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { renderInline };
