import { CONTACT_CTA } from "./content";
import { QuoteDialog } from "./QuoteDialog";

/**
 * Contact CTA — occupies the target's .cta band (445px).
 * Full-bleed photograph with a teal scrim, centred heading, lead and button.
 */
export function QuoteCta() {
  return (
    <section
      className="relative flex h-[340px] items-center justify-center bg-cover bg-center sm:h-[445px]"
      style={{ backgroundImage: `url(${CONTACT_CTA.background})` }}
    >
      <div className="absolute inset-0 bg-[rgba(1,32,34,0.84)]" />

      <div className="relative mx-auto flex max-w-[2000px] flex-col items-center px-[3%]">
        <h2 className="t-h2 max-w-[16ch] text-center font-medium text-white">
          {CONTACT_CTA.heading}
        </h2>

        <p className="mt-6 max-w-[620px] text-center text-[17px] font-light leading-[26px] text-white">
          {CONTACT_CTA.body}
        </p>

        <QuoteDialog
          label={CONTACT_CTA.button.label}
          className="mt-[36px] flex h-[68px] w-[294px] items-center justify-center bg-[rgba(38,84,87,0.85)] text-[17px] font-normal text-white transition-colors hover:bg-[rgba(52,104,107,0.92)]"
        />
      </div>
    </section>
  );
}
