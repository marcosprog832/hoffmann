/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], },
      colors: {
        dark: '#05070a',
        'dark-card': '#0e1117',
        primary: '#0056b3',
        accent: '#00c3ff',
        gold: '#cba135',
      }
    },
  },
  plugins: [],
}