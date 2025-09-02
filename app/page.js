// app/page.js — SAFE VERSION (tanpa .map, no dynamic vars)
export const revalidate = 3600;        // ISR 1 jam
export const dynamic = "force-static"; // paksa statis

import Link from "next/link";

export const metadata = {
  title: "Valtren Corp — Growth & Funnels",
  description: "Satu HQ, banyak funnel. Eksekusi cepat untuk growth & monetisasi.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container">
        <div className="rounded-3xl bg-gradient-to-br from-[#0B2C36] via-[#135868] to-[#2B7A8C] text-white p-10 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium">
            Valtren Corp HQ
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Growth Engine untuk <span className="text-[#17B894]">Bisnis yang Ngebut</span>
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Multi-funnel terintegrasi: SEO lokal, marketplace, tracking, hingga chat-closing.
            Dibangun di edge, cepat, dan siap scale.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/wa-funnel" className="inline-flex items-center rounded-xl px-5 py-3 font-medium bg-[#17B894] text-white hover:opacity-90">
              Mulai dari WA Funnel
            </Link>
            <a href="#funnels" className="inline-flex items-center rounded-xl px-5 py-3 font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20">
              Lihat Semua Funnel
            </a>
          </div>
        </div>
      </section>

      {/* VALUE PROPS (hardcoded, no map) */}
      <section className="container mt-12 grid gap-6 sm:grid-cols-3">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <h3 className="text-lg font-bold">Cepat</h3>
          <p className="mt-2 text-gray-600">ISR + edge cache. Page load kencang dan stabil.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <h3 className="text-lg font-bold">Terukur</h3>
          <p className="mt-2 text-gray-600">Pixel & analytics rapi. Keputusan berbasis data.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <h3 className="text-lg font-bold">Siap Scale</h3>
          <p className="mt-2 text-gray-600">Modular. Tambah funnel tanpa bongkar fondasi.</p>
        </div>
      </section>

      {/* BADGES */}
      <section className="container mt-12 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <h3 className="text-xl font-bold">Trusted by executors</h3>
        <p className="mt-2 text-gray-600">Dipakai buat sprint cepat, audit, dan closing harian.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-[#0E3A47]/20 px-3 py-1 text-xs font-medium text-[#0E3A47]">Edge Ready</span>
          <span className="inline-flex items-center rounded-full border border-[#0E3A47]/20 px-3 py-1 text-xs font-medium text-[#0E3A47]">SEO Friendly</span>
          <span className="inline-flex items-center rounded-full border border-[#0E3A47]/20 px-3 py-1 text-xs font-medium text-[#0E3A47]">WA First</span>
        </div>
      </section>

      {/* FUNNEL GRID (hardcoded, no map) */}
      <section id="funnels" className="container mt-12">
        <h2 className="text-2xl font-bold">Pilih Jalur Eksekusi</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Link href="/gbp-sprint" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold">GBP Sprint</h3>
            <p className="mt-2 text-gray-600">Optimasi Google Business Profile dalam 7 hari.</p>
            <span className="mt-4 inline-flex text-[#0E3A47]">Pelajari →</span>
          </Link>
          <Link href="/marketplace-makeover" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold">Marketplace Makeover</h3>
            <p className="mt-2 text-gray-600">Naikkan performa listing & conversion.</p>
            <span className="mt-4 inline-flex text-[#0E3A47]">Pelajari →</span>
          </Link>
          <Link href="/pixel-audit" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold">Pixel Audit</h3>
            <p className="mt-2 text-gray-600">Audit tracking & events untuk iklan efisien.</p>
            <span className="mt-4 inline-flex text-[#0E3A47]">Pelajari →</span>
          </Link>
          <Link href="/wa-funnel" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold">WA Funnel</h3>
            <p className="mt-2 text-gray-600">Funnel chat kencang dari klik ke closing.</p>
            <span className="mt-4 inline-flex text-[#0E3A47]">Pelajari →</span>
          </Link>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="container mt-12 mb-16">
        <div className="rounded-3xl p-8 md:p-12 text-white bg-gradient-to-r from-[#0E3A47] to-[#2B7A8C] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Siap gas? Eksekusi tanpa drama.</h3>
            <p className="text-white/90">Kami bantu set funnel, tracking, sampai closing.</p>
          </div>
          <Link href="/wa-funnel" className="inline-flex items-center rounded-xl px-5 py-3 font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20">
            Chat sekarang
          </Link>
        </div>
      </section>
    </>
  );
    }
