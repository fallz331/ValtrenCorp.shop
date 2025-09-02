// components/Pricing.js
export default function Pricing({ title = "Pricing", plans = [], wa = "62812xxxxxxx", waPrefix = "Valtren" }) {
  const finalPlans = plans.length
    ? plans
    : [
        { name: "Starter", price: "Rp499K", tag: "Coba Dulu",
          features: ["Audit singkat", "1x revisi", "Checklist eksekusi"],
          msg: "Starter" },
        { name: "Pro", price: "Rp1,2Jt", tag: "Paling Laris",
          features: ["Full setup + optimasi", "Template & SOP", "Support 7 hari"],
          featured: true, msg: "Pro" },
        { name: "Scale", price: "Custom", tag: "Untuk Tim",
          features: ["Strategi growth", "A/B Test", "Weekly review"],
          msg: "Scale" },
      ];

  return (
    <section className="mt-12">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">Pilih paket, sisanya biar kami yang gas.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {finalPlans.map((p) => (
          <div key={p.name}
            className={`rounded-2xl border p-6 bg-white shadow-soft relative ${p.featured ? "ring-2 ring-accent" : ""}`}>
            {p.tag && (
              <span className="absolute -top-3 right-4 rounded-full bg-accent text-white text-xs px-3 py-1 shadow">
                {p.tag}
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-2 text-3xl font-extrabold text-primary">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {p.features?.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" /> {f}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent(`${waPrefix} - Saya pilih paket: ${p.msg || p.name}`)}`}
              className="mt-6 inline-flex w-full justify-center rounded-xl bg-accent px-5 py-3 font-medium text-white hover:opacity-90"
            >
              Chat WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
