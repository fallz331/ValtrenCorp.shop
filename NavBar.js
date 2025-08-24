import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/gbp-sprint", label: "GBP Sprint" },
  { href: "/wa-funnel", label: "WA Funnel" },
  { href: "/pixel-audit", label: "Pixel Audit" },
  { href: "/marketplace-makeover", label: "Marketplace" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur bg-black/20">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Valtren Corp" width={28} height={28} />
          <span className="font-semibold tracking-tight">Valtren Corp</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden text-sm text-white/70">Menu</div>
      </div>
    </header>
  );
}
