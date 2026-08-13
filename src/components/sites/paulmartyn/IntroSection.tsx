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
          {/* A label, not a heading — it was an h1, which made "ABOUT US"
              the homepage's main heading as far as Google was concerned. */}
          <p className="t-eyebrow mb-[20px] text-pm-ink">{INTRO.eyebrow}</p>

          <h2 className="t-h3 mb-[1em] font-medium text-pm-ink">
            {INTRO.heading}
          </h2>

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

        <figure className="shrink-0 md:w-[37.8%]">
          <div
            /* 10% larger than the reference site's 450px/34.4% — the photo was
               sitting small against the intro copy at desktop widths. */
            className="h-[330px] bg-cover bg-center sm:h-[418px] md:h-[495px]"
            style={{ backgroundImage: `url(${INTRO.homeImage})` }}
            role="img"
            aria-label="Rear elevation of a completed Paul Martyn new build, rendered upper floors over brickwork, with the garden laid out below"
          />

          {/* Project credit.
              13.5px — the site's small-label size, as used by the inner-page
              eyebrows. Deliberately NOT `t-eyebrow`, which is 18px and reads as
              a section label rather than a caption. Keep every caption at this
              size so they stay subordinate to the headings above them. */}
          <figcaption className="mt-4 text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
            {INTRO.homeImageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
