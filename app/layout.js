import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Valtren Corp",
  description: "Multi-funnel marketing by Valtren Corp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-br from-muted via-primary-600 to-primary-400">
          <NavBar />
          {/* Hero gradient background only at top */}
          <div className="h-10" />
        </div>
        <main className="container -mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
