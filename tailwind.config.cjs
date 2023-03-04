/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
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
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,1) 100%);",
      },
    },
  },
  plugins: [],
};
