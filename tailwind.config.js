/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('/src/assets/background.svg')",
        'fondo': "url('/src/assets/fondo.png')",
      }
    },
  },
  plugins: [],
}

