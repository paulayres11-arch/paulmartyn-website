import type { Metadata } from "next";
import { ContactForm } from "@/components/sites/paulmartyn/ContactForm";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import {
  BEFORE_WE_MEET,
  CONTACT,
  CONTACT_CTA,
  SERVICES,
} from "@/components/sites/paulmartyn/content";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/sites/paulmartyn/shared/icons";

export const metadata: Metadata = {
  title: "Contact | Paul Martyn",
  description: CONTACT_CTA.body,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Get in touch"
      title={CONTACT_CTA.heading}
      showCta={false}
    >
      <section className="bg-white pb-[10vh]">
        <div className="mx-auto flex max-w-[2000px] flex-col gap-16 px-[3%] lg:flex-row lg:gap-24">
          <div className="lg:w-1/2">
            <p className="max-w-[560px] text-[17px] font-normal leading-[26px] text-pm-slate">
              {CONTACT_CTA.body}
            </p>

            <dl className="mt-12 space-y-8">
              <div className="flex items-start gap-5">
                <PhoneIcon className="mt-1 h-[22px] w-[22px] shrink-0 text-pm-gold" />
                <div>
                  <dt className="text-[13px] font-medium uppercase tracking-[1px] text-pm-slate">
                    Phone
                  </dt>
                  <dd className="mt-1 text-[21px] font-light text-pm-ink">
                    <a href={CONTACT.phoneHref} className="transition-colors hover:text-pm-gold">
                      {CONTACT.phone}
                    </a>
                  </dd>
                  <dd className="mt-1 text-[21px] font-light text-pm-ink">
                    <a href={CONTACT.mobileHref} className="transition-colors hover:text-pm-gold">
                      {CONTACT.mobile}
                    </a>
                    <span className="ml-2 text-[13px] text-pm-slate">mobile</span>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <EnvelopeIcon className="mt-1 h-[22px] w-[22px] shrink-0 text-pm-gold" />
                <div>
                  <dt className="text-[13px] font-medium uppercase tracking-[1px] text-pm-slate">
                    Email
                  </dt>
                  <dd className="mt-1 break-words text-[21px] font-light text-pm-ink">
                    <a href={CONTACT.emailHref} className="transition-colors hover:text-pm-gold">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <MapPinIcon className="mt-1 h-[22px] w-[22px] shrink-0 text-pm-gold" />
                <div>
                  <dt className="text-[13px] font-medium uppercase tracking-[1px] text-pm-slate">
                    Where we work
                  </dt>
                  <dd className="mt-1 max-w-[420px] text-[17px] font-light leading-[26px] text-pm-ink">
                    {CONTACT.location}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:w-1/2">
            <div className="border-t-4 border-pm-gold bg-pm-cream p-8">
              <h2 className="text-[21px] font-medium text-pm-ink">
                {BEFORE_WE_MEET.heading}
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[22.5px] text-pm-slate">
                {BEFORE_WE_MEET.intro}
              </p>

              <ul className="mt-6 space-y-4">
                {BEFORE_WE_MEET.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-[15px] font-normal leading-[22.5px] text-pm-slate"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 bg-pm-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <ContactForm />
            </div>

          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[2000px] px-[3%]">
          <div
            className="mt-[25px] h-[280px] bg-cover bg-center"
            style={{ backgroundImage: `url(${SERVICES.image})` }}
            role="img"
            aria-label="Paul Martyn project"
          />
        </div>
      </section>
    </PageShell>
  );
}
