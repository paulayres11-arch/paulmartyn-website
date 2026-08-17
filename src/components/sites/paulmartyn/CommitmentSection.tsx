import { PROCESS } from "./content";

/**
 * "Our process" — occupies the target's commitment section slot.
 * Photograph left, four numbered steps right (the reference had two paragraphs).
 */
export function CommitmentSection() {
  return (
    <section className="bg-white py-[68px]">
      <div className="mx-auto flex max-w-[2000px] flex-col gap-12 px-[3%] md:flex-row md:items-start md:gap-20">
        <figure className="md:w-7/12">
          <div
            className="h-[300px] bg-cover bg-center sm:h-[400px] md:h-[507px]"
            style={{ backgroundImage: `url(${PROCESS.image})` }}
            role="img"
            aria-label="Paul Martyn project"
          />

          {/* Project credit — same 13.5px small-label size as IntroSection's
              caption, so every photo credit on the page matches. */}
          <figcaption className="mt-4 text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
            {PROCESS.imageCaption}
          </figcaption>
        </figure>

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
                  {step.charging ? (
                    <p className="mt-1 text-[13.5px] font-medium uppercase tracking-[1px] text-pm-gold">
                      {step.charging}
                    </p>
                  ) : null}
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
