import Link from "next/link";
export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="font-bold">Valtren Corp</Link>
        <div className="text-sm flex gap-4">
          <Link href="/gbp-sprint">GBP Sprint</Link>
          <Link href="/marketplace-makeover">Marketplace</Link>
          <Link href="/pixel-audit">Pixel Audit</Link>
          <Link href="/wa-funnel">WA Funnel</Link>
        </div>
      </nav>
    </header>
  );
}
