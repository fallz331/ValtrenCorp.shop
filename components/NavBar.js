import Link from "next/link";

export default function NavBar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/gbp-sprint", label: "GBP Sprint" },
    { href: "/marketplace-makeover", label: "Marketplace" },
    { href: "/pixel-audit", label: "Pixel Audit" },
    { href: "/wa-funnel", label: "WA Funnel" },
  ];
  return (
    <header className="bg-transparent">
      <nav className="container py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-extrabold text-xl tracking-wide">
          VALTREN
        </Link>
        <div className="hidden sm:flex gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/90 hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
