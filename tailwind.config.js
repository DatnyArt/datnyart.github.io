/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "amelie-fierce": ['"Amelie Fierce"', "sans-serif"],
        "instrument-serif": ['"Instrument Serif"', "sans-serif"],
        jakarta: ['"Jakarta"', "sans-serif"],
        "jakarta-italic": ['"Jakarta Italic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
