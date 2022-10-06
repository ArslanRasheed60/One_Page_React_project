/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f4e8b4",
        h_pink: "#ed3092",
        check: "#15dea4",
        evenColor: "#f8faf9",
      }
    },
  },
  plugins: [],
}