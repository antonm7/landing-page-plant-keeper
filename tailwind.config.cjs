/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main:['Overlock', 'cursive'],
      secondary:['Amaranth', 'sans-serif']
    },
    extend: {
      colors: {
        'greenBg':'#EBEFDE',
        'grayText':'#5C6259',
        'mainGreen':'#63D782'
      }
    },
  },
  plugins: [],
}
