/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
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
