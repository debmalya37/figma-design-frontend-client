/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'], // Set Montserrat as the primary font
      },
      fontSize: {
        '14pt': '14pt',
        '24pt': '24pt',
        '32pt': '32pt',
      },
    },
  },
  plugins: [],
};
