export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata = {
  title: "Marketplace Makeover — Valtren",
  description: "Upgrade performa toko & listing: CTR naik, konversi naik.",
};

const WA = process.env.NEXT_PUBLIC_WA || "62812xxxxxxx";

export default function Page() {
  const steps = [
    { t: "Audit", d: "Judul, foto, deskripsi, harga, ulasan." },
    { t: "Makeover", d: "Copy & visual baru + bundling." },
    { t: "Boost", d: "Promo, voucher, dan traffic management." },
  ];
  return (
    <section className="card -mt-8">
      <h1 className="text-3xl font-bold">Marketplace Makeover</h1>
      <p className="mt-2 text-gray-600">Listing glow-up untuk performa toko.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.t} className="p-4 rounded-xl border">
            <h3 className="font-semibold">{s.t}</h3>
            <p className="text-gray-600 mt-1">{s.d}</p>
          </div>
        ))}
      </div>

      <a
        href={`https://wa.me/${WA}?text=Min%20mau%20Marketplace%20Makeover`}
        className="btn btn-primary mt-8"
      >
        ⚡ Tanya paket & harga
      </a>
    </section>
  );
}
