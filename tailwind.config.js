/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { primary: "#111827", accent: "#22c55e", muted: "#6b7280" } },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: []
};
