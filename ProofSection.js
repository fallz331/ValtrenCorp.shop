export default function ProofSection({ bullets = [] }) {
  return (
    <section className="container py-6">
      <div className="card p-6">
        <div className="text-sm text-emerald-400 font-semibold">Bukti & Social Proof</div>
        <ul className="mt-3 grid gap-2 text-white/80">
          {bullets.map((b, i) => <li key={i}>• {b}</li>)}
        </ul>
      </div>
    </section>
  );
}
