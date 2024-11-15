/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        bebasNeue: "Bebas Neue, serif",
        roboto: "Roboto, sans-serif",
        raleway: "Raleway, sans-serif",
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

