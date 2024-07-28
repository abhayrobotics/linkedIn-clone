/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        "mainColor":"#0a66c2",
        "maindark":"#004182",
        "feedColor":"#f4f2ee",
      }
    },
  },
  plugins: [],
}

