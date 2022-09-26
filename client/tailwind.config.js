/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hemocyanin: 'var(--hemocyanin)',
        ice: 'var(--ice)',
        plum: 'var(--plum)',
        purpleHaze: 'var(--purpleHaze)',
        siphon: 'var(--siphon)',
        sohoLights: 'var(--sohoLights)',
        purpleFunk: 'var(--purpleFunk)'
      }
    },
  },
  plugins: [],
}
