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
   *  into a click-to-play video with `src` as its poster. */
  gallery?: { src: string; alt: string; youtubeId?: string }[];
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
  /** Checkatrade job category, e.g. "Extensions / Conversions". */
  jobType?: string;
  /** Checkatrade job location, e.g. "GU9". */
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
