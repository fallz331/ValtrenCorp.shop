import "./globals.css";
import { SITE } from "@/lib/site";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: `${SITE.name} — Growth without drama`,
  description: "Valtren Corp: cashflow sprints, funnels, audits, and local lead-gen that just work.",
  metadataBase: new URL(`https://${SITE.domain}`),
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
