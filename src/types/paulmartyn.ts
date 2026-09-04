/**
 * Content contracts for the Paul Martyn Construction site.
 */

export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

export interface HeroSlide {
  image: string;
  alt: string;
}

export type BoxLinkIcon = "map-pin" | "badge" | "receipt" | "user";

export interface BoxLink {
  title: string;
  body: string;
  icon: BoxLinkIcon;
}

export interface ServiceTab {
  /**
   * Title tag for this service's page. Deliberately separate from `heading`:
   * the heading is what a visitor reads, the seoTitle is what Google shows in
   * results, and they want different things. ~55-60 chars.
   */
  seoTitle?: string;
  id: string;
  label: string;
  heading: string;
  body: string;
  linkLabel: string;
  path: string;
  image: string;
  imageAlt: string;
  /** Long-form copy for the service's own page, below the summary. */
  detail?: string[];
  /** Closing line, set as a pull quote at the end of the detail copy. */
  pullQuote?: string;
  /** Recent work, shown in the picture window. A `youtubeId` turns the slide
   *  into a click-to-play video with `src` as its poster. An `overlay` stamps
   *  a label across the foot of the slide — used to mark a visualisation
   *  rather than a photograph of finished work. */
  gallery?: { src: string; alt: string; youtubeId?: string; overlay?: string }[];
}

export interface Testimonial {
  /** Short headline pulled from the quote; shown large above the body. */
  title?: string;
  body: string;
  author: string;
  /** Stars out of 5. Defaults to 5 when omitted. */
  stars?: number;
  /** True until the client has approved the wording for publication. */
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  title: string;
  body: string;
  /**
   * What the stage costs the client — "Complimentary", "Paid design stage",
   * "On signing". Rendered as a small label under the title. Optional so a
   * stage that has no charging position can simply omit it.
   */
  charging?: string;
}

export type ReviewSource = "google" | "checkatrade";

export interface Review {
  source: ReviewSource;
  /** Google shows a reviewer name; Checkatrade often shows none. */
  author?: string;
  /** Age or date exactly as the platform displays it. */
  when: string;
  /** Google: stars out of 5. */
  rating?: number;
  /** Checkatrade: score out of 10. */
  score?: number;
  /** Checkatrade review headline. */
  title?: string;
  /** Job category, e.g. "Extensions / Conversions". Checkatrade supplies it;
   *  it can also be set by hand on a Google review whose job we know. */
  jobType?: string;
  /** Job location, e.g. "GU9" or "Cranleigh". Same as `jobType`: from
   *  Checkatrade, or stated by Paul about his own job. Never inferred. */
  jobLocation?: string;
  verified?: boolean;
  body: string;
  /** True until a real review from the platform replaces this card. */
  isSample?: boolean;
}

export interface SiteVideo {
  title: string;
  description: string;
  /** YouTube video id. Undefined renders an empty, labelled slot. */
  youtubeId?: string;
  /** Locally hosted thumbnail, so no third-party request happens before play. */
  poster?: string;
  /** Shorts are 9:16; everything else defaults to 16:9. */
  portrait?: boolean;
}

export interface PriceBand {
  label: string;
  body: string[];
  /** e.g. "£40,000 – £100,000+" — a total project range. */
  range?: string;
  /** e.g. "£2,000 per m²" — a rate, where a total range doesn't apply. */
  rate?: string;
  /** Phrases inside `body` to render bold — used for price figures. */
  emphasise?: string[];
}

/**
 * One block of a post body.
 *
 * Posts used to be three flat paragraphs, which is why none of them ranked:
 * a 200-word page has nothing for a search engine to match a long query
 * against, and a wall of `<p>` gives it no structure to read either. The
 * block types below exist so a post can carry real headings, checklists,
 * cost tables and quoted site advice — the things a homeowner searching
 * "how much does X cost in Cranleigh" is actually looking for.
 *
 * Every `text` field supports inline markup, handled by `renderInline` in
 * BlogArticle: `**bold**` and `[label](/path)` links. Keep links internal —
 * they are what pass authority to the service and area pages.
 */
export type BlogBlock =
  | { type: "p"; text: string }
  /** Renders as `<h2>`, and becomes an entry in the post's contents list. */
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  /** Paul's own words. Attributed, boxed, and marked up as a `<blockquote>`. */
  | { type: "quote"; text: string; attribution: string }
  /** A boxed aside — a warning, a rule of thumb, a "what this saves you". */
  | { type: "callout"; title: string; text: string }
  /** A money or timing table. `head` and every row must be the same length. */
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  /** The summary box at the top of a post. */
  | { type: "takeaways"; items: string[] };

export interface BlogFaq {
  /** Phrased as a homeowner would type it — these become FAQPage schema. */
  question: string;
  answer: string;
}

export interface BlogPost {
  /** URL-safe id. Also the post's own route: /blog/{slug}. */
  slug: string;
  title: string;
  category: string;
  /** ISO date, e.g. "2026-08-13". Rendered as a UK long date. */
  date: string;
  /** ISO date the post was last substantially revised, if ever. */
  updated?: string;
  /** ~55–60 chars. The `<title>` of the post's own page. */
  seoTitle: string;
  /** ~150 chars. */
  metaDescription: string;
  /** One or two sentences shown on the card in the index grid. */
  excerpt: string;
  /** Describes the infographic for screen readers and for search. */
  imageAlt: string;
  body: BlogBlock[];
  /** Answered in the page and emitted as FAQPage schema. */
  faqs?: BlogFaq[];
  /** Slugs of two or three posts to link at the foot of this one. */
  related?: string[];
  /** Original infographic, drawn inline as SVG. */
  art: React.ReactNode;
}
