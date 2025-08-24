export default function FAQ({ items = [] }) {
  return (
    <section className="container py-6">
      <div className="card p-6">
        <div className="text-xl font-semibold">FAQ</div>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {items.map((q, i) => (
            <div key={i}>
              <div className="font-semibold text-white/90">{q.q}</div>
              <div className="text-white/70 mt-1">{q.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
