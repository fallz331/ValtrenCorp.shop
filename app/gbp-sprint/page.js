export const metadata = { title: "GBP Sprint — Valtren" };
const WA = process.env.NEXT_PUBLIC_WA || "62812xxxxxxx";
export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-bold">GBP Sprint</h1>
      <p className="mt-2 text-gray-600">Optimasi Google Business Profile dalam 7 hari.</p>
      <a
        href={`https://wa.me/${WA}?text=Min%20mau%20GBP%20Sprint`}
        className="inline-block mt-6 rounded-lg bg-black text-white px-4 py-2"
      >
        Konsultasi Gratis di WhatsApp
      </a>
    </section>
  );
}
