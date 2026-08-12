import { PROCESS } from "./content";

/**
 * "Our process" — occupies the target's commitment section slot.
 * Photograph left, four numbered steps right (the reference had two paragraphs).
 */
export function CommitmentSection() {
  return (
    <section className="bg-white py-[68px]">
      <div className="mx-auto flex max-w-[2000px] flex-col gap-12 px-[3%] md:flex-row md:items-start md:gap-20">
        <div
          className="h-[507px] bg-cover bg-center md:w-7/12"
          style={{ backgroundImage: `url(${PROCESS.image})` }}
          role="img"
          aria-label="Paul Martyn project"
        />

        <div className="md:w-5/12">
          <h3 className="t-h3 max-w-[14ch] font-medium text-pm-ink">
            {PROCESS.heading}
          </h3>

          <ol className="mt-[48px] max-w-[400px]">
            {PROCESS.steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-5 border-t border-pm-rule py-5 first:border-t-0 first:pt-0"
              >
                <span className="mt-[2px] text-[15px] font-medium tabular-nums text-pm-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h4 className="text-[17px] font-medium leading-[22px] text-pm-ink">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-[15px] font-normal leading-[22.5px] text-pm-slate">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
