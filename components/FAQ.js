// components/FAQ.js
export default function FAQ({ title = "FAQ", items = [] }) {
  const faqs = items.length
    ? items
    : [
        { q: "Berapa lama prosesnya?", a: "Rata-rata 3–7 hari kerja tergantung paket dan kesiapan materi." },
        { q: "Apakah bisa revisi?", a: "Bisa. Minimal 1x revisi untuk Starter, lebih untuk paket Pro/Scale." },
        { q: "Pembayaran bagaimana?", a: "Transfer / payment link. DP 50% untuk start, 50% setelah approve." },
      ];
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4 divide-y rounded-2xl border bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 group">
            <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
              {f.q}
              <span className="text-primary group-open:rotate-45 transition">＋</span>
            </summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
