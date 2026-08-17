import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { COMPANY, CONTACT } from "@/components/sites/paulmartyn/content";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

/**
 * The Cranleigh page.
 *
 * Every competitor ranking for "builders Cranleigh" has a page like this and
 * this site did not, which is the single clearest reason it appeared for none
 * of the Cranleigh searches: the business is physically on Bridge Road and the
 * site advertised sixteen towns, thirteen of them 20–35 miles north.
 *
 * The point of this page is substance a template cannot fake. Every local
 * claim below was checked against Waverley Borough Council or Historic
 * England on 2026-08-17 rather than taken from the strategy note, and three
 * of the note's figures were wrong when checked:
 *
 *   - Waverley has 43 conservation areas, not 44.
 *   - Cranleigh's was designated October 1973 and EXTENDED July 1985 and
 *     July 2016 — not "1973 and 1983, combined in 1985". The 2016 extension
 *     is the most recent and the note missed it.
 *   - The parish has 82 listed buildings, not "roughly 90", and the church is
 *     St Nicolas, not St Nicholas. Grade II* is right.
 *
 * Written as "more than eighty" so it stays true as the list changes. If you
 * add a figure here, check it first — a wrong designation date on the page
 * that claims local expertise does more damage than no page at all.
 */

const CONSERVATION_AREA_DESIGNATED = "October 1973";

const TITLE =
  "Builders in Cranleigh, Surrey | Extensions & Renovations | Paul Martyn";
const DESCRIPTION =
  "Family-run builders based on Bridge Road, Cranleigh. Extensions, renovations and heritage work across Cranleigh, Ewhurst and Shamley Green. Fixed price. Call 01483 612156.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/areas/cranleigh" },
  openGraph: {
    type: "website",
    url: "/areas/cranleigh",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/**
 * The same business as the homepage, not a second one.
 *
 * Both carry `@id: ${SITE_URL}/#business`, so Google reads two descriptions of
 * one contractor rather than two contractors at one address. Without the
 * shared id, a LocalBusiness on every area page is a good way to fragment the
 * entity you are trying to strengthen.
 */
const AREA_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#business`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: `${SITE_URL}/areas/cranleigh`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    postalCode: CONTACT.address.postcode,
    addressCountry: "GB",
  },
  areaServed: [
    "Cranleigh",
    "Ewhurst",
    "Shamley Green",
    "Wonersh",
    "Bramley",
    "Alfold",
    "Dunsfold",
    "Loxwood",
    "Rudgwick",
    "Chiddingfold",
    "Godalming",
  ].map((place) => ({ "@type": "Place", name: place })),
  description:
    "Family-run builders based on Bridge Road, Cranleigh. Extensions, renovations, listed building and heritage work across Cranleigh and the surrounding Waverley villages.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-[24px] font-medium leading-[30px] text-pm-ink">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
      {children}
    </p>
  );
}

export default function CranleighPage() {
  return (
    <PageShell eyebrow="Areas covered" title="Builders in Cranleigh, Surrey">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AREA_SCHEMA) }}
      />

      <section className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <div className="max-w-[760px]">
            <p className="text-[21px] font-normal leading-[32px] text-pm-ink">
              We are based at {CONTACT.address.full} — not a branch office or a
              covered postcode, but the address the company works from. Cranleigh
              is where we live, and most of what we build is within a few miles
              of the High Street.
            </p>

            <Body>
              That matters more here than it would in a commuter town. Cranleigh
              is a village with a conservation area through the middle of it,
              more than eighty listed buildings in the parish and a planning
              framework of its own — and the questions that decide a project
              tend to be local ones.
            </Body>

            <SectionHeading>What we do in Cranleigh</SectionHeading>

            <Body>
              Extensions and whole-house renovations, kitchens and bathrooms,
              loft conversions, new builds, and listed building and heritage
              work. The{" "}
              <Link
                href="/services"
                className="text-pm-ink underline underline-offset-4"
              >
                services pages
              </Link>{" "}
              set out each in detail, and{" "}
              <Link
                href="/pricing"
                className="text-pm-ink underline underline-offset-4"
              >
                our prices are published
              </Link>{" "}
              — which, locally, almost nobody else does.
            </Body>

            <SectionHeading>
              The Cranleigh Conservation Area, and why it changes the job
            </SectionHeading>

            <Body>
              The High Street was designated a conservation area in{" "}
              {CONSERVATION_AREA_DESIGNATED}, extended in July 1985 and again in
              July 2016 — one of 43 conservation areas in Waverley. Inside it,
              work that would be permitted development elsewhere needs
              permission, and demolishing any building over 115 cubic metres
              requires consent in its own right. So does taking down a boundary
              wall over 1m high where it fronts a highway, or over 2m elsewhere.
            </Body>

            <Body>
              That last one catches people out more than any other rule on this
              page, because a garden wall rarely feels like it needs permission
              until it has already gone. Proceeding without consent is a criminal
              offence, not a fee.
            </Body>

            <SectionHeading>Listed buildings and timber frames</SectionHeading>

            <Body>
              The parish has more than eighty listed buildings — along the High
              Street, Guildford Road, Horsham Road, Knowle Lane and Smithwood
              Common — with the Church of St Nicolas listed at Grade II*. A good
              number are 15th to 17th century timber-framed houses refronted in
              brick or stone in the 18th and 19th, which is why a Cranleigh
              cottage so often turns out to be older behind the elevation than it
              looks from the road.
            </Body>

            <Body>
              Those are the buildings where the drawings and the building rarely
              agree, and where the work is as much about what to keep as what to
              replace. It is the part of the job we are most experienced in and,
              as far as we can tell, the part no other builder advertising in
              Cranleigh offers at all.
            </Body>

            <SectionHeading>Planning: what applies here</SectionHeading>

            <Body>
              Cranleigh is Waverley Borough Council, not Guildford — a
              distinction worth getting right before an application is drawn.
              Householder work is measured against Waverley&apos;s Residential
              Extensions SPD, adopted 12 October 2010, which expects an extension
              to complement the existing house in style, scale and materials.
            </Body>

            <Body>
              Since the Cranleigh Neighbourhood Plan was made on 15 July 2024,
              Waverley uses it to help determine applications in the parish. And
              the settlement boundary decides more than most people expect:
              Cranleigh&apos;s built-up area sits outside the Green Belt and
              outside the countryside beyond it, so the ordinary householder
              rules apply — while land past the boundary is judged against much
              tighter countryside policy. Rowly, in the same parish, is washed
              over by Green Belt entirely.
            </Body>

            <SectionHeading>The villages around us</SectionHeading>

            <Body>
              We work throughout the villages around Cranleigh — Ewhurst, Shamley
              Green, Wonersh, Bramley, Alfold, Dunsfold, Loxwood, Rudgwick,
              Chiddingfold and Godalming. Nearly all of them are conservation
              areas in their own right, and most were designated in the early
              1970s, so the same consent questions come up in each with different
              answers.
            </Body>

            <SectionHeading>Talk to us</SectionHeading>

            <Body>
              Call {CONTACT.phone}, or{" "}
              <Link
                href="/contact"
                className="text-pm-ink underline underline-offset-4"
              >
                send us the details of your project
              </Link>
              . If it is a listed building or sits in the conservation area, say
              so — it changes what we need to look at first.
            </Body>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
