/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E3A47",
          600: "#135868",
          400: "#2B7A8C",
        },
        accent: "#17B894",
        muted: "#0B2C36",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
