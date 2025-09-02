export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata = {
  title: "WA Funnel — Valtren",
  description: "Dari klik ke chat ke closing. Simple dan kencang.",
};

const WA = process.env.NEXT_PUBLIC_WA || "62812xxxxxxx";

export default function Page() {
  return (
    <section className="card -mt-8">
      <h1 className="text-3xl font-bold">WA Funnel</h1>
      <p className="mt-2 text-gray-600">Optimasi CTA, pre-qualify, & skrip chat produktif.</p>

      <form
        className="mt-6 grid gap-3 sm:max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const name = fd.get("name") || "";
          location.href = `https://wa.me/${WA}?text=Halo%20Valtren,%20saya%20${encodeURIComponent(
            name
          )}%20mau%20konsultasi%20WA%20Funnel`;
        }}
      >
        <input name="name" placeholder="Nama kamu" className="border rounded-xl px-4 py-3" />
        <button className="btn btn-primary">Chat di WhatsApp</button>
      </form>
    </section>
  );
}
