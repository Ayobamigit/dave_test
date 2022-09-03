/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      'white': '#ffffff',
      'default': '#344054',
      'light-purple': '#F2F4F7',
      'grey':'#F9FAFB',
      'blue':'#101828',
      'deep-grey':'#667085',
      'purple':'#6941C6'
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
