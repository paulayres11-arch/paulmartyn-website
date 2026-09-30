import { faqPage, type FaqItem } from "@/lib/jsonld";
import { JsonLd } from "./JsonLd";

/**
 * "Questions we get asked" — the visible Q&A and its FAQPage schema, rendered
 * from one array.
 *
 * Before this existed each page kept a FAQS array and a separate FAQ_SCHEMA
 * built from it, and nothing stopped one being edited without the other.
 * Google treats FAQ schema that doesn't match the visible text as spam, so
 * the two now can't be separated: if a question is on the page, it is in the
 * schema, word for word, and nothing else is.
 *
 * Answers are plain text. No `**bold**` or links — the schema carries the
 * string as written, so any markup would show up as literal asterisks there.
 */
export function Faq({
  items,
  heading = "Questions we get asked",
  id = "questions-we-get-asked",
}: {
  items: readonly FaqItem[];
  heading?: string;
  id?: string;
}) {
  if (!items.length) return null;

  return (
    <section className="mt-16">
      <JsonLd data={faqPage(items)} />

      <h2
        id={id}
        className="scroll-mt-[110px] text-[26px] font-medium leading-[34px] text-pm-ink sm:text-[30px] sm:leading-[38px]"
      >
        {heading}
      </h2>

      <dl className="mt-6 divide-y divide-pm-rule border-y border-pm-rule">
        {items.map((faq) => (
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
  );
}
