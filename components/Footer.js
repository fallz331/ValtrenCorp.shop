export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Valtren Corp. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-gray-900" href="/sitemap.xml">Sitemap</a>
          <a className="hover:text-gray-900" href="/robots.txt">Robots</a>
        </div>
      </div>
    </footer>
  );
}
