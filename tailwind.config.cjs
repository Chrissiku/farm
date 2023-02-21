/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        green1: "#023F3A",
        green2: "#075953",
        red1: "#C13512",
        dark: "#222222",
        light: "#F2EEE9",
      },
    },
  },
  plugins: [],
};
