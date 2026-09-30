import type { ReactNode } from "react";
import Link from "next/link";
import { breadcrumbList, type Crumb } from "@/lib/jsonld";
import { CONTACT, PROCESS } from "./content";

/**
 * The long-form page kit.
 *
 * The Cranleigh, house-extensions and loft pages each defined their own
 * SectionHeading / Body / InlineLink with identical classes. New long-form
 * pages use these instead, so the type scale is set once.
 */

export function Measure({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white pb-[10vh]">
      <div className="mx-auto max-w-[2000px] px-[3%]">
        <div className="max-w-[760px]">{children}</div>
      </div>
    </section>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-[21px] font-normal leading-[32px] text-pm-ink">
      {children}
    </p>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-[110px] text-[24px] font-medium leading-[30px] text-pm-ink"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 text-[19px] font-medium leading-[26px] text-pm-ink">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
      {children}
    </p>
  );
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-pm-ink">{children}</strong>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-pm-ink underline underline-offset-4">
      {children}
    </Link>
  );
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-6 space-y-3 text-[17px] font-normal leading-[27px] text-pm-slate">
      {items.map((item, i) => (
        <li key={i} className="border-l-4 border-pm-cream pl-5">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** A term/description table, as used for the extension types on the Cranleigh page. */
export function Rows({
  rows,
}: {
  rows: { name: string; tag?: string; body: ReactNode }[];
}) {
  return (
    <dl className="mt-10 border-t border-pm-ink/15">
      {rows.map((row) => (
        <div
          key={row.name}
          className="border-b border-pm-ink/15 py-6 sm:flex sm:gap-10"
        >
          <dt className="shrink-0 sm:w-[220px]">
            <span className="block text-[17px] font-medium leading-[24px] text-pm-ink">
              {row.name}
            </span>
            {row.tag ? (
              <span className="mt-1 block text-[13.5px] font-light uppercase tracking-[1px] text-pm-gold">
                {row.tag}
              </span>
            ) : null}
          </dt>
          <dd className="mt-3 text-[17px] font-normal leading-[27px] text-pm-slate sm:mt-0">
            {row.body}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-8 border-l-4 border-pm-gold bg-pm-cream p-6">
      <p className="text-[15px] font-medium uppercase tracking-[1px] text-pm-ink">
        {label}
      </p>
      <div className="text-[17px] font-normal leading-[27px] text-pm-slate [&>p]:mt-4">
        {children}
      </div>
    </div>
  );
}

export function Quote({ children, cite }: { children: ReactNode; cite: string }) {
  return (
    <blockquote className="mt-6 border-l-2 border-pm-gold pl-6">
      <p className="text-[17px] font-normal italic leading-[27px] text-pm-ink">
        {children}
      </p>
      <footer className="mt-3 text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
        {cite}
      </footer>
    </blockquote>
  );
}

/**
 * The four-stage route to a fixed price, from PROCESS — the same words as
 * /process and the Build Estimate app, so no page can describe the pricing
 * differently from the others.
 */
export function PriceLadder() {
  return (
    <ol className="mt-6 border-t border-pm-ink/15">
      {PROCESS.steps.map((step, i) => (
        <li key={step.title} className="flex gap-6 border-b border-pm-ink/15 py-6">
          <span className="mt-1 text-[13.5px] font-light tracking-[1px] text-pm-gold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[17px] font-medium leading-[24px] text-pm-ink">
              {step.title}
              {step.charging ? (
                <span className="ml-3 text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
                  {step.charging}
                </span>
              ) : null}
            </h3>
            <p className="mt-2 text-[17px] font-normal leading-[27px] text-pm-slate">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Closing call to action with both numbers, for the foot of a long page. */
export function TalkToUs({
  heading,
  children,
}: {
  heading: string;
  children?: ReactNode;
}) {
  return (
    <section data-nowc className="mt-14 border border-pm-rule bg-[#f6f8f8] p-8">
      <h2 className="text-[24px] font-medium leading-[32px] text-pm-ink">
        {heading}
      </h2>
      {children ? (
        <div className="mt-4 text-[17px] font-normal leading-[29px] text-pm-slate">
          {children}
        </div>
      ) : null}
      <div className="mt-7 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex h-[52px] items-center bg-pm-teal px-6 text-[15px] font-normal text-white transition-colors hover:bg-pm-gold"
        >
          Send us your project details
        </Link>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex h-[52px] items-center border border-pm-ink px-6 text-[15px] font-normal text-pm-ink transition-colors hover:border-pm-gold hover:text-pm-gold"
        >
          Call {CONTACT.phone}
        </a>
        <a
          href={CONTACT.mobileHref}
          className="inline-flex h-[52px] items-center border border-pm-ink px-6 text-[15px] font-normal text-pm-ink transition-colors hover:border-pm-gold hover:text-pm-gold"
        >
          Mobile {CONTACT.mobile}
        </a>
      </div>
    </section>
  );
}

/**
 * Visible breadcrumb. The BreadcrumbList schema is built from the same trail
 * (see `breadcrumbList`), so what a visitor sees and what Google is told are
 * one list. The last crumb is the current page and is not linked.
 */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return (
    <nav data-nowc aria-label="Breadcrumb" className="mb-8 text-[14px] text-pm-slate">
      {items.map((crumb, i) => (
        <span key={crumb.path + i}>
          {i > 0 ? <span className="px-2 text-pm-rule">/</span> : null}
          {i < items.length - 1 ? (
            <Link href={crumb.path} className="transition-colors hover:text-pm-gold">
              {crumb.name}
            </Link>
          ) : (
            <span className="text-pm-ink">{crumb.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export { breadcrumbList };
