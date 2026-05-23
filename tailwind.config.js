/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          DEFAULT: '#7426b0',
          light: '#9d4fd6',
        }
      }
    },
  },
  plugins: [],
}
