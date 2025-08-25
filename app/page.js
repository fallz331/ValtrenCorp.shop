import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Valtren Corp HQ</h1>
      <p className="mt-2 text-gray-600">Satu HQ, banyak funnel. Pilih jalur eksekusi:</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          { href: "/gbp-sprint", label: "GBP Sprint" },
          { href: "/marketplace-makeover", label: "Marketplace Makeover" },
          { href: "/pixel-audit", label: "Pixel Audit" },
          { href: "/wa-funnel", label: "WA Funnel" },
        ].map(x => (
          <li key={x.href} className="border rounded-lg p-4 hover:shadow">
            <Link href={x.href} className="font-medium">{x.label} →</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
