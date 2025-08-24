export default function PricingTable({ plans = [] }) {
  return (
    <section className="container py-6">
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <div key={i} className="card p-6">
            <div className="text-white/90 text-xl font-semibold">{p.name}</div>
            <div className="mt-1 text-white/50">{p.suits}</div>
            <div className="mt-4 text-3xl font-bold">Rp{p.price.toLocaleString("id-ID")}</div>
            <ul className="mt-4 text-white/70 space-y-2">
              {p.features.map((f, j) => <li key={j}>✓ {f}</li>)}
            </ul>
            <a href={p.ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 inline-block">Pilih Paket</a>
          </div>
        ))}
      </div>
    </section>
  );
}
