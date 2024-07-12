/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: { min: "50px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      desktop: { min: "1024px", max: "1279px" },
      large: { min: "1280px", max: "1535px" },
      xtraLarge: { min: "1536px" },
    },
    extend: {},
  },
  plugins: [],
};
