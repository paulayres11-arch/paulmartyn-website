import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { ServiceDetail } from "@/components/sites/paulmartyn/ServiceDetail";
import { SERVICES } from "@/components/sites/paulmartyn/content";

const service = SERVICES.tabs[6];

export const metadata: Metadata = {
  title: service.seoTitle ?? `${service.heading} | Paul Martyn`,
  description: service.body,
  alternates: { canonical: "/services/kitchens" },
};

export default function Page() {
  return (
    <PageShell title={service.heading}>
      <ServiceDetail service={service} />
    </PageShell>
  );
}
