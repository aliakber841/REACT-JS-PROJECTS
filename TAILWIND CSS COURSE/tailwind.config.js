/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    /*spacing:{
      "1" :"8px",
      "2" :"12px",
      "3" :"16px",
      "4" :"24px",
      "5" :"32px",
      "6" :"48px",
    }, */
    extend: {
     colors:{
      manage:"#294545"
     } 
    },
  },
  plugins: [],
}

