/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontSize: {
        xs: "13px",
      },
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
