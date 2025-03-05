/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.{js,ts,tsx}', "./app/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  corePlugin: {
    borderOpacity: true,
  },
  plugins: [],
};
