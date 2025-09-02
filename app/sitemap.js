export default function sitemap() {
  const base = "https://valtrencorp.shop";
  return [
    { url: `${base}/`, changefreq: "weekly", priority: 1.0 },
    { url: `${base}/gbp-sprint`, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/marketplace-makeover`, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/pixel-audit`, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/wa-funnel`, changefreq: "monthly", priority: 0.8 },
  ];
}
