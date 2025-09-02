// components/WaLeadForm.js
"use client";

export default function WaLeadForm({ wa }) {
  async function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const url =
      `https://wa.me/${wa}?text=` +
      encodeURIComponent(`Halo Valtren, saya ${name || "—"} mau konsultasi WA Funnel`);
    window.location.href = url;
  }

  return (
    <form onSubmit={submit} className="mt-6 grid gap-3 sm:max-w-md">
      <input
        name="name"
        placeholder="Nama kamu"
        className="border rounded-xl px-4 py-3"
      />
      <button className="inline-flex items-center rounded-xl px-5 py-3 font-medium bg-[#17B894] text-white hover:opacity-90">
        Chat di WhatsApp
      </button>
    </form>
  );
          }
