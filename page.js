import Hero from "@/components/Hero";
import ProofSection from "@/components/ProofSection";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import Script from "next/script";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "WhatsApp Funnel — Chat jadi cuan. — Valtren Corp",
  description: "Bangun jalur dari klik ke chat ke order. Link-in-bio, auto-reply, katalog, dan SOP follow-up yang nendang.",
};

export default function Page() {
  const plans = [{"name": "Starter", "suits": "Single-offer", "price": 599000, "features": ["Link-in-bio (3–5 CTA)", "Skrip chat + follow-up", "Auto-reply dasar", "Form pre-qualification"]}, {"name": "Pro", "suits": "Catalog kecil/F&B", "price": 999000, "features": ["Katalog 10 produk", "Auto-reply bercabang", "Integrasi form→WA", "Tracking UTM"]}, {"name": "Scale", "suits": "High volume", "price": 1699000, "features": ["Broadcast template", "SOP Appointment Setter", "Integrasi Notion CRM", "Dashboard KPI"]}].map(p => ({...p, ctaHref: waLink("WhatsApp Funnel — Chat jadi cuan. — " + p.name)}));
  return (
    <>
      <Hero title="WhatsApp Funnel — Chat jadi cuan." subtitle="Bangun jalur dari klik ke chat ke order. Link-in-bio, auto-reply, katalog, dan SOP follow-up yang nendang." calendly={process.env.NEXT_PUBLIC_CALENDLY_URL} />
      <ProofSection bullets={["Rasio chat → order naik", "Respon lebih cepat dengan auto-reply", "Prospek terkelola dalam pipeline"]} />
      <PricingTable plans={plans} />
      <FAQ items={[{"q": "Butuh WA Business?", "a": "Iya, biar fitur katalog & label tersedia."}, {"q": "Perlu API?", "a": "Tidak wajib di awal. API buat broadcast/automation lanjut."}, {"q": "Termasuk desain?", "a": "Kami sediakan templat & komponen visual rapi."}]} />
      <Script type="application/ld+json" id="jsonld" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "WhatsApp Funnel", "provider": {"@type": "Organization", "name": "Valtren Corp"}})}} />
    </>
  );
}
