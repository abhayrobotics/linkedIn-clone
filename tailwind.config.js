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
      },
      screens: {
        "xsm":"420px",
        'md': '890px',
        'lg': '1045px',
        // => @media (min-width: 1024px) { ... }
  
        
      },
    },
  },
  plugins: [],
}

