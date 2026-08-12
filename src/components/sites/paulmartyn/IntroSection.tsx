import { INTRO } from "./content";

/**
 * Intro / About block. Static.
 *
 * Column geometry measured from the reference at 1280px wide:
 *   text column   left 119px (9.3%), width 489px (45.5% of the content span)
 *   image column  left 824px (64.4%), width 369px (34.4%), height 450px
 *   content span  119 -> 1193, i.e. padding-left 9.3%, padding-right 6.8%
 * Note this is a deeper gutter than the 3% used by the header.
 *
 * Typography (measured):
 *   eyebrow  18px / 200 / letter-spacing 1px / margin-bottom 20px
 *   heading  calc(15px + 2vw) -> 40.6px @1280 / line-height 1.1 / margin-bottom 1em
 *   body     15px / 22.5px / #677c83
 */
export function IntroSection() {
  return (
    /* .section.sectionpad.intro — padding: 10vh 0, bottom zeroed on the target */
    <section className="bg-white pt-[10vh]">
      <div className="mx-auto flex max-w-[2000px] flex-col gap-12 pl-[9.3%] pr-[6.8%] md:flex-row md:items-start md:justify-between md:gap-0">
        <div className="md:w-[45.5%]">
          <h1 className="t-eyebrow mb-[20px] text-pm-ink">{INTRO.eyebrow}</h1>

          <h3 className="t-h3 mb-[1em] font-medium text-pm-ink">
            {INTRO.heading}
          </h3>

          {INTRO.body.map((paragraph, i) => (
            <p
              key={i}
              className={`text-[15px] font-normal leading-[22.5px] text-pm-slate ${
                i === 0 ? "" : "mt-6"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="h-[450px] shrink-0 bg-cover bg-center md:w-[34.4%]"
          style={{ backgroundImage: `url(${INTRO.image})` }}
          role="img"
          aria-label="Paul Martyn project"
        />
      </div>
    </section>
  );
}
