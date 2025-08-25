export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Valtren Corp. All rights reserved.
      </div>
    </footer>
  );
}
