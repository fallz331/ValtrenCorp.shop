export const SITE = {
  name: "Valtren Corp",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "valtrencorp.shop",
  waPhone: process.env.NEXT_PUBLIC_WA_PHONE || "6281234567890",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/intro",
};
export const waLink = (text = "Halo, saya tertarik dengan layanan Valtren Corp. Boleh minta detailnya?") =>
  `https://wa.me/${SITE.waPhone}?text=${encodeURIComponent(text)}`;
