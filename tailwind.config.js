/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend:{
      colors: {
        customColor: '#1e293b',
        cstCol: '#94a3b8',
      },
    },
  },
  plugins: [],
}

