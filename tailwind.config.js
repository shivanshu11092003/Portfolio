/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    
    extend: {
      colors:{
        webText:"#3CCF91",
        btncolor:"#1c1c1c"
      }
    },
  },
  plugins: [],
}

