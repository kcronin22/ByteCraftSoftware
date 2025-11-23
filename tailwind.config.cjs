/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#EF7603",
          dark: "#151515",
        },
      },
      boxShadow: {
        "brand-soft": "0 18px 45px rgba(15, 23, 42, 0.15)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
