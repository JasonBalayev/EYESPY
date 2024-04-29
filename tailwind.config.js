/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/@nextui-org/theme/dist/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
