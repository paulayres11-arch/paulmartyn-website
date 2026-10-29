import { Cormorant_Garamond } from "next/font/google";
import { SiteFooter } from "@/components/sites/paulmartyn/SiteFooter";
import { SiteHeader } from "@/components/sites/paulmartyn/SiteHeader";
import { TopBar } from "@/components/sites/paulmartyn/TopBar";
import { CONTACT, SERVICES } from "@/components/sites/paulmartyn/content";
import { EnquiryForm } from "@/components/sites/paulmartyn/enquiry/EnquiryForm";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/sites/paulmartyn/shared/icons";
import { pageMetadata } from "@/lib/seo";

/**
 * /get-in-touch — the enquiry and booking form (spec v1, 29 Oct 2026).
 *
 * Replaced /contact, which now 308s here. Sarah's "Start your enquiry" email
 * button links to this exact address, so it must not move.
 *
 * The phone, email and full address stay on the page below the form: this is
 * the page local search reads for name, address and phone, and they must
 * match the Google Business Profile (see CONTACT.address in content.ts).
 */

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-pm-serif",
  display: "swap",
});

export const metadata = pageMetadata({
  title: "Get in Touch | Builders in Cranleigh, Surrey",
  description:
    "Tell us about your extension, renovation or new build in Cranleigh and across Surrey. If you have plans, book a WhatsApp call with Paul straight away.",
  path: "/get-in-touch",
});

/** Genuine Paul Martyn work, reused from the renovations gallery with its alt text. */
const STRIP = [
  "appletrees-gable-extension.jpg",
  "old-oak-barn-garden-pool.jpg",
  "lazell-gardens-frontage.jpg",
];

export default function GetInTouchPage() {
  const gallery = SERVICES.tabs.flatMap((t) => t.gallery ?? []);
  const photos = STRIP.map((file) =>
    gallery.find((g) => g.src.endsWith(`/${file}`)),
  ).filter((p) => p !== undefined);

  return (
    <div className={`pm-site relative w-full ${serif.variable}`}>
      <TopBar />
      <SiteHeader variant="solid" />

      <main className="pm-enquiry">
        <div className="pm-enquiry-band" aria-hidden="true" />

        <div className="mx-auto max-w-[560px] px-4 pt-10 pb-6 text-center sm:pt-14">
          <h1 className="pm-enquiry-heading text-[32px] leading-[1.1] sm:text-[36px]">
            Tell us about your project.
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.6] text-(--pm-text)">
            For homeowners in Surrey and the surrounding area planning an
            extension, renovation or new build. Tell us a little about you and
            your home. If you have plans, you can book a call with Paul
            straight away.
          </p>
        </div>

        {photos.length ? (
          <div className="mx-auto grid max-w-[720px] grid-cols-3 gap-2 px-4 pb-10 sm:gap-3">
            {photos.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element -- the site serves plain <img> throughout; no image optimiser is configured
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="pm-eq-photo aspect-[4/3] w-full object-cover"
              />
            ))}
          </div>
        ) : null}

        <div className="px-4 pb-16">
          <EnquiryForm />
        </div>

        <section
          aria-labelledby="contact-details"
          className="border-t border-(--pm-border) bg-(--pm-panel) px-4 py-12"
        >
          <div className="mx-auto max-w-[480px]">
            <h2
              id="contact-details"
              className="pm-enquiry-heading text-center text-[26px]"
            >
              Prefer to talk?
            </h2>
            <dl className="mt-8 space-y-6 text-[15px] leading-[1.5] text-[#2b2f2a]">
              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-[2px] h-5 w-5 shrink-0 text-(--pm-teal)" />
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a href={CONTACT.phoneHref} className="hover:text-(--pm-teal-dark)">
                      {CONTACT.phone}
                    </a>
                  </dd>
                  <dd>
                    <a href={CONTACT.mobileHref} className="hover:text-(--pm-teal-dark)">
                      {CONTACT.mobile}
                    </a>{" "}
                    <span className="text-[13px] text-(--pm-text)">mobile</span>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="mt-[2px] h-5 w-5 shrink-0 text-(--pm-teal)" />
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd className="break-words">
                    <a href={CONTACT.emailHref} className="hover:text-(--pm-teal-dark)">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-[2px] h-5 w-5 shrink-0 text-(--pm-teal)" />
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd>
                    <address className="not-italic">{CONTACT.address.full}</address>
                  </dd>
                  <dd className="mt-1 text-(--pm-text)">{CONTACT.location}</dd>
                </div>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
