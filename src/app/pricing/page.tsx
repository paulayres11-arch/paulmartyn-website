import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { PricingAccordion } from "@/components/sites/paulmartyn/PricingAccordion";
import {
  PRICING,
  SERVICES,
} from "@/components/sites/paulmartyn/content";

export const metadata: Metadata = {
  title: "Pricing | Paul Martyn",
  description: PRICING.intro[0],
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <PageShell title={PRICING.title}>
      {/* Approach + what a cost plan covers */}
      <section className="bg-white pb-[10vh]">
        <div className="mx-auto flex max-w-[2000px] flex-col gap-14 px-[3%] lg:flex-row lg:gap-20">
          <div className="lg:w-1/2">
            {PRICING.intro.map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-[620px] text-[17px] font-normal leading-[27px] text-pm-slate ${
                  i === 0 ? "" : "mt-6"
                }`}
              >
                {paragraph}
              </p>
            ))}

            {PRICING.sections.map((section) => (
              <div key={section.heading} className="mt-12 max-w-[620px]">
                <h2 className="text-[21px] font-medium leading-[26px] text-pm-ink">
                  {section.heading}
                </h2>

                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-4 text-[17px] font-normal leading-[27px] text-pm-slate"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

          </div>

          {/* Photo and checklist share the right column so the copy on the
              left has something beside it the whole way down, rather than the
              text running out and the photo sitting alone underneath. */}
          <div className="lg:w-1/2">
            {/* Aspect-ratio box, not a fixed-height band: a band with bg-cover
                cropped this portrait photo to a strip through the middle of
                the garage doors. */}
            <div
              className="aspect-[1206/1565] w-full max-w-[460px] bg-cover bg-center"
              style={{ backgroundImage: `url(${SERVICES.image})` }}
              role="img"
              aria-label="Newly built oak-framed cart lodge with clay tiled roof, dormer and painted timber garage doors"
            />

            <h2 className="mt-12 text-[26px] font-medium leading-[1.15] text-pm-ink">
              {PRICING.included.heading}
            </h2>

            <ul className="mt-7 space-y-4">
              {PRICING.included.items.map((item) => (
                <li key={item} className="flex gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="mt-[3px] h-[18px] w-[18px] shrink-0 text-pm-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                  <span className="text-[16px] font-normal leading-[25px] text-pm-slate">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Example quote + price bands */}
      <section className="bg-pm-cream py-[10vh]">
        <div className="mx-auto flex max-w-[2000px] flex-col gap-14 px-[3%] lg:flex-row lg:gap-20">
          <div className="lg:w-[42%]">
            <h2 className="t-h3 font-medium text-pm-ink">
              {PRICING.exampleQuote.heading}
            </h2>

            {PRICING.exampleQuote.body.map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-[520px] text-[17px] font-normal leading-[27px] text-pm-slate ${
                  i === 0 ? "mt-7" : "mt-5"
                }`}
              >
                {paragraph}
              </p>
            ))}

            {PRICING.exampleQuote.href ? (
              <a
                href={PRICING.exampleQuote.href}
                className="mt-8 inline-flex h-[58px] w-[240px] items-center justify-center bg-pm-teal text-[16.5px] font-bold text-white transition-colors hover:bg-pm-gold"
              >
                {PRICING.exampleQuote.label}
              </a>
            ) : (
              <>
                <a
                  href="/contact"
                  className="mt-8 inline-flex h-[58px] w-[240px] items-center justify-center bg-pm-teal text-[16.5px] font-bold text-white transition-colors hover:bg-pm-gold"
                >
                  Ask for an example
                </a>
                <p className="mt-4 max-w-[440px] border-l-4 border-pm-gold bg-white px-4 py-2 text-[13px] font-medium uppercase tracking-[1px] text-pm-slate">
                  {PRICING.exampleQuote.fallbackNote}
                </p>
              </>
            )}
          </div>

          <div className="lg:w-[58%]">
            <PricingAccordion />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
