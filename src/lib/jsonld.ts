import { SITE_URL } from "@/lib/site";

/**
 * Shared JSON-LD builders.
 *
 * Every page used to hand-roll its own schema object, which is how the
 * extension cost guide ended up with an Article whose author was a bare
 * Organization name rather than a reference to the business entity. These
 * builders make the right shape the easy one:
 *
 *   - everything that names the business points at `BUSINESS_ID` instead of
 *     restating it, so Google reads one contractor described many times rather
 *     than many contractors;
 *   - paths are passed site-relative and made absolute here, once.
 *
 * Render the result with <JsonLd>. Each builder returns a node WITHOUT
 * `@context`; <JsonLd> adds it, and wraps several nodes in one `@graph`.
 */

/** The one business entity. Declared in full on the home and Cranleigh pages. */
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const BUSINESS_REF = {
  "@type": "Organization",
  name: "Paul Martyn Construction",
  "@id": BUSINESS_ID,
} as const;

type JsonLdNode = Record<string, unknown>;

const absolute = (path: string) =>
  path.startsWith("http") ? path : path === "/" ? SITE_URL : `${SITE_URL}${path}`;

export interface Crumb {
  name: string;
  /** Site-relative path, e.g. "/areas". */
  path: string;
}

/**
 * Home is prepended automatically, so pass only the trail below it —
 * `[{ name: "Areas", path: "/areas/cranleigh" }, ...]`.
 */
export function breadcrumbList(trail: Crumb[]): JsonLdNode {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQPage from the same array the page renders, so the visible text and the
 * schema cannot drift apart. Don't call this with anything <Faq> isn't also
 * showing — schema describing text that isn't on the page is a
 * structured-data violation. <Faq> calls it for you.
 */
export function faqPage(items: readonly FaqItem[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function service(options: {
  name: string;
  serviceType: string;
  path: string;
  description: string;
  areaServed: readonly string[];
}): JsonLdNode {
  return {
    "@type": "Service",
    name: options.name,
    serviceType: options.serviceType,
    provider: { "@id": BUSINESS_ID },
    areaServed: options.areaServed.map((place) => ({
      "@type": "Place",
      name: place,
    })),
    url: absolute(options.path),
    description: options.description,
  };
}

export function article(options: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  section?: string;
}): JsonLdNode {
  return {
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    ...(options.section ? { articleSection: options.section } : {}),
    inLanguage: "en-GB",
    mainEntityOfPage: { "@type": "WebPage", "@id": absolute(options.path) },
    author: BUSINESS_REF,
    publisher: BUSINESS_REF,
    ...(options.image ? { image: absolute(options.image) } : {}),
  };
}
