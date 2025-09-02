export const revalidate = 3600;
export const dynamic = "force-static";

import Link from "next/link";

export const metadata = {
  title: "Valtren Corp — Growth & Funnels",
  description: "Satu HQ, banyak funnel. Eksekusi cepat untuk growth & monetisasi.",
};

export default function Home() {
  const funnels = [
    { href: "/gbp-sprint", title: "GBP Sprint", desc: "Optimasi Google Business Profile dalam 7 hari." },
    { href: "/marketplace-makeover", title: "Marketplace Makeover", desc: "Naikkan performa listing & conversion." },
    { href: "/pixel-audit", title: "Pixel Audit", desc: "Audit tracking & events untuk iklan yang efisien." },
    { href: "/wa-funnel", title: "WA Funnel", desc: "Funnel chat yang ngebut dari klik ke closing." },
  ];

  return (
    <>
      {/* di dalam hero box */}
<img src="/logo.svg" alt="Valtren" className="mt-4 h-10 opacity-90" />
      <section className="container">
        <div className="rounded-3xl bg-gradient-to-br from-muted via-primary-600 to-primary-400 text-white p-10 md:p-16 shadow-soft">
          <span className="badge border-white/30 bg-white/10 text-white">Valtren Corp HQ</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Growth Engine untuk <span className="text-accent">Bisnis yang Ngebut</span>
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Multi-funnel terintegrasi: SEO lokal, marketplace, tracking, hingga chat-closing.
            Dibangun di edge, cepat, dan siap scale.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/wa-funnel" className="btn btn-primary">
              Mulai dari WA Funnel
            </Link>
            <a href="#funnels" className="btn btn-ghost">Lihat Semua Funnel</a>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { t: "Cepat", d: "SSR/ISR + edge cache. Page load ringan dan konsisten." },
          { t: "Terukur", d: "Pixel & analytics rapi. Keputusan berbasis data." },
          { t: "Siap Scale", d: "Arsitektur modular. Tambah funnel tanpa pusing." },
        ].map((x) => (
          <div key={x.t} className="card">
            <h3 className="text-lg font-bold">{x.t}</h3>
            <p className="mt-2 text-gray-600">{x.d}</p>
          </div>
        ))}
      </section>

      {/* PROOF / SOCIAL */}
      <section className="container mt-12 card">
        <h3 className="text-xl font-bold">Trusted by executors</h3>
        <p className="mt-2 text-gray-600">Digunakan untuk sprint cepat, audit, dan closing harian.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="badge border-primary/20 text-primary">Edge Ready</span>
          <span className="badge border-primary/20 text-primary">SEO Friendly</span>
          <span className="badge border-primary/20 text-primary">WA First</span>
        </div>
      </section>

      {/* FUNNEL GRID */}
      <section id="funnels" className="container mt-12">
        <h2 className="text-2xl font-bold">Pilih Jalur Eksekusi</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {funnels.map((f) => (
            <Link key={f.href} href={f.href} className="card hover:shadow-lg transition">
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
              <span className="mt-4 inline-flex text-primary">Pelajari →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="container mt-12 mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-400 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Siap gas? Kita eksekusi tanpa drama.</h3>
            <p className="text-white/90">Bantuin lu set funnel, tracking, sampai closing.</p>
          </div>
          <Link href="/wa-funnel" className="btn btn-ghost">Chat sekarang</Link>
        </div>
      </section>
    </>
  );
}n
