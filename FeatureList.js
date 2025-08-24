export default function FeatureList({ items = [] }) {
  return (
    <section className="container py-6">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="card p-6">
            <div className="text-emerald-400 text-sm font-semibold">{it.kicker}</div>
            <div className="mt-1 text-xl font-semibold">{it.title}</div>
            <div className="mt-2 text-white/70">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
