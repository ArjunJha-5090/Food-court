/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A2E28', 
        secondary: '#1C1816', 
        accent: '#C19B5E', 
        background: '#FDFBF7', // Premium Ivory — NOTE: actual bg controlled by --color-bg in index.css
        surface: '#FFFFFF', // Pure Surface
        text: '#332925', // Soft Dark Grey/Brown
        saffron: '#D47029', // Muted Saffron
        leaf: '#2F5C3B', // Forest Green
      },
      fontFamily: {
        sans: ['"Outfit"', '"Space Grotesk"', 'sans-serif'],
        heading: ['"Rozha One"', 'Anton', 'serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #1C1816',
        'brutal-lg': '8px 8px 0px 0px #1C1816',
        'brutal-sm': '2px 2px 0px 0px #1C1816',
        'heritage': '0 10px 40px -10px rgba(138, 46, 40, 0.15)',
        'premium': '0 4px 20px -2px rgba(193, 155, 94, 0.15)',
      },
      backgroundImage: {
        'indian-pattern': "url('https://www.transparenttextures.com/patterns/mandala.png')",
        'henna-pattern': "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      }
    },
  },
  plugins: [],
}
