/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/bg-img.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        slategrey: "#02161E ",
        darkteal: "#002431 ",
        lightteal: "#013746",
        customorange: "#FE8A1D ",
        lightblue: "#87A5B7",
      },
      colors: {
        primary: "#02161E",
        secondary: "#002431",
        "primary-yellow": "#FE8A1D",
        "primary-text": "#87A5B7",
        "primary-light": "#013746",
        "primary-nav": "#02161e",
        "primary-pink": "#F90DC8",
      },
    },
  },
  plugins: [],
};
