import { waLink } from "@/lib/site";
export default function Hero({ title, subtitle, ctaText = "Chat di WhatsApp", secondaryText = "Book a Call", calendly }) {
  return (
    <section className="container pt-16 pb-12">
      <div className="card p-8 md:p-12">
        <h1 className="section-title">{title}</h1>
        <p className="mt-4 text-white/70 text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a className="btn btn-primary" href={waLink(title)} target="_blank" rel="noopener noreferrer">{ctaText}</a>
          {calendly && (<a className="btn btn-outline" href={calendly} target="_blank" rel="noopener noreferrer">{secondaryText}</a>)}
        </div>
      </div>
    </section>
  );
}
