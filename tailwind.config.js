/** @type {import('tailwindcss').Config} */
const { fontFamily, screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Courier Prime", ...fontFamily.sans],
        cursive: ["'Press Start 2P'"],
      },
    },
  },
  plugins: [],
};
