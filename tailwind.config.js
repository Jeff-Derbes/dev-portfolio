/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242526",
        accent: "#40dbfc",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/assets/hero-img.svg')",
        "hero-mobile": "url('../public/assets/mobile-hero.svg')",
      },
    },
  },
  plugins: [],
};
