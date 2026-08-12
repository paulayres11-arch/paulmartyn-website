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

/**
 * Paul Martyn Construction — homepage.
 *
 * Layout model: one normal-flow scroll document. The header is the only element
 * outside flow — absolute over the hero at rest, fixed once scrolled past 153px.
 * See docs/research/paulmartyn/PAGE_TOPOLOGY.md
 */
export default function Home() {
  return (
    <div className="pm-site relative w-full">
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
