/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    "body-text",
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "key--normal",
    "key--operative",
    "key--equals" // include as many col-span values as you expect to use
  ],

  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"], // set DM Sans as a custom sans font
      },
      fontWeight: {
        bold: 700,
      },
    },
  },
  plugins: [],
}
