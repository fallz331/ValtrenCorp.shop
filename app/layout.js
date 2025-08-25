import "../globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = { title: "Valtren Corp", description: "Multi-funnel by Valtren" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
