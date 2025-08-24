import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="container py-10 text-sm text-white/60 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white/90">Privacy</Link>
          <Link href="/terms" className="hover:text-white/90">Terms</Link>
          <a href={`https://www.${SITE.domain}`} className="hover:text-white/90">{SITE.domain}</a>
        </div>
      </div>
    </footer>
  );
}
