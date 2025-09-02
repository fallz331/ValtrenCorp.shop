export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata = {
  title: "GBP Sprint — Valtren",
  description: "Optimasi Google Business Profile dalam 7 hari.",
};

const WA = process.env.NEXT_PUBLIC_WA || "62812xxxxxxx";

export default function Page() {
  const perks = [
    "Audit NAP & kategori",
    "Optimasi foto, post, Q&A",
    "Keyword lokal & service area",
    "Review gameplan + template balasan",
  ];

  return (
    <section className="card -mt-8 relative overflow-hidden">
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 via-primary-400/5 to-accent/10" />
      <h1 className="text-3xl font-bold">GBP Sprint</h1>
      <p className="mt-2 text-gray-600">Optimasi Google Business Profile dalam 7 hari.</p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${WA}?text=Min%20mau%20GBP%20Sprint`}
        className="btn btn-primary mt-8"
      >
        🚀 Konsultasi Gratis di WhatsApp
      </a>
    </section>
  );
}
