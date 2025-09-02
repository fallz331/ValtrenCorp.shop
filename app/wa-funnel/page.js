// app/wa-funnel/page.js
export const revalidate = 3600;
export const dynamic = "force-static";

import WaLeadForm from "../../components/WaLeadForm";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";

export const metadata = {
  title: "WA Funnel — Valtren",
  description: "Dari klik ke chat ke closing. Simple dan ngebut.",
};

const WA = process.env.NEXT_PUBLIC_WA || "62812xxxxxxx";

export default function Page() {
  const plans = [
    { name: "Starter", price: "Rp399K", features: ["Script chat", "Pre-qual form", "Link tracking"], msg: "WA Funnel - Starter" },
    { name: "Closer", price: "Rp999K", featured: true, tag: "Best Value", features: ["Template multi-skenario", "Auto-reply 24/7", "Report harian"], msg: "WA Funnel - Closer" },
    { name: "Agent Team", price: "Custom", features: ["Multi-agent routing", "Integrasi CRM", "SOP & training"], msg: "WA Funnel - Agent Team" },
  ];
  const faqs = [
    { q: "Butuh tool apa?", a: "Bisa manual (link WA), bisa integrasi tool chat/API sesuai paket." },
    { q: "Apakah ada auto follow-up?", a: "Ada, via template & pengingat berkala." },
  ];

  return (
    <section className="card -mt-8">
      <h1 className="text-3xl font-bold">WA Funnel</h1>
      <p className="mt-2 text-gray-600">Optimasi CTA, pre-qualify, sampai closing.</p>

      {/* Form khusus di Client Component */}
      <WaLeadForm wa={WA} />

      <Pricing title="Paket" plans={plans} wa={WA} waPrefix="WA Funnel" />
      <FAQ title="FAQ" items={faqs} />
    </section>
  );
}
