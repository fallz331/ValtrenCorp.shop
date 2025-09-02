export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata = {
  title: "Pixel Audit — Valtren",
  description: "Audit tracking & events: iklan jadi efisien.",
};

const WA = process.env.NEXT_PUBLIC_WA || "62812xxxxxxx";

export default function Page() {
  return (
    <section className="card -mt-8">
      <h1 className="text-3xl font-bold">Pixel Audit</h1>
      <p className="mt-2 text-gray-600">Pastikan event firing & data match 100%.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          "Meta Pixel / GA4 / TikTok Pixel mapping",
          "Server events (CAPI) readiness",
          "Consent mode baseline",
          "Event de-duplication & naming standard",
        ].map((x) => (
          <div key={x} className="p-4 rounded-xl border">{x}</div>
        ))}
      </div>

      <a
        href={`https://wa.me/${WA}?text=Min%20mau%20Pixel%20Audit`}
        className="btn btn-primary mt-8"
      >
        🔧 Cek gratis 10 menit
      </a>
    </section>
  );
}
