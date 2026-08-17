import { BoxLinks } from "@/components/sites/paulmartyn/BoxLinks";
import { CommitmentSection } from "@/components/sites/paulmartyn/CommitmentSection";
import { HashScroll } from "@/components/sites/paulmartyn/HashScroll";
import { HeroSlider } from "@/components/sites/paulmartyn/HeroSlider";
import { IntroSection } from "@/components/sites/paulmartyn/IntroSection";
import { ReviewsSlider } from "@/components/sites/paulmartyn/ReviewsSlider";
import { QuoteCta } from "@/components/sites/paulmartyn/QuoteCta";
import { ServicesTabs } from "@/components/sites/paulmartyn/ServicesTabs";
import { SiteFooter } from "@/components/sites/paulmartyn/SiteFooter";
import { SiteHeader } from "@/components/sites/paulmartyn/SiteHeader";
import { TopBar } from "@/components/sites/paulmartyn/TopBar";
import { VideoStrip } from "@/components/sites/paulmartyn/VideoStrip";
import { TrackRecord } from "@/components/sites/paulmartyn/TrackRecord";
import { AREAS, COMPANY, CONTACT } from "@/components/sites/paulmartyn/content";
import { SITE_URL } from "@/lib/site";

/**
 * Paul Martyn Construction — homepage.
 *
 * Layout model: one normal-flow scroll document. The header is the only element
 * outside flow — absolute over the hero at rest, fixed once scrolled past 153px.
 * See docs/research/paulmartyn/PAGE_TOPOLOGY.md
 */
/**
 * LocalBusiness structured data.
 *
 * The address matches the Google Business Profile exactly. That is the point:
 * Google cross-references the two, and consistent name/address/phone is one of
 * the few local-pack signals a website can actually influence.
 *
 * This is what tells Google the business is a builder, in Cranleigh, covering
 * a named list of towns — rather than leaving it to infer all of that from
 * prose. `GeneralContractor` is schema.org's type for a building contractor.
 *
 * Everything here is drawn from the site's own content so it cannot drift out
 * of step with what a visitor reads. */
const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  /**
   * Shared with the Cranleigh area page, which describes the same business.
   * Without a common `@id`, each page emitting a LocalBusiness reads as a
   * separate contractor at the same address — fragmenting the entity that the
   * local-pack signals are meant to consolidate.
   */
  "@id": `${SITE_URL}/#business`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: SITE_URL,
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
  areaServed: AREAS.items.map((town) => ({ "@type": "Place", name: town })),
  description:
    "Family-run builders based in Cranleigh, Surrey. Residential renovations and extensions, new builds, listed buildings and commercial fit-outs across Surrey, Hampshire and West Sussex.",
};

export default function Home() {
  return (
    <div className="pm-site relative w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }}
      />
      <HashScroll />
      <TopBar />
      <SiteHeader />

      <main>
        <HeroSlider />
        <IntroSection />

        {/* Platform reviews sit high on the page, straight after the intro —
            as on the reference. The written testimonial band is deliberately
            kept much further down so the two never read as one block. */}
        <ReviewsSlider />

        {/* Spacer band — .section.sectionpad.zeropaddingbottom, 10vh on the target */}
        <div className="h-[10vh] bg-white" />
        <BoxLinks />
        <ServicesTabs />
        <TrackRecord />
        <VideoStrip />
        <CommitmentSection />
        <QuoteCta />
      </main>

      <SiteFooter />
    </div>
  );
}
