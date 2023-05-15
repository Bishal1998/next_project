/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'placeholder': '#CCCCCC',
        'rectange': '#27485D',
        'link': '#476D73',
      },
      boxShadow: {
        'box': '0px 2px 2px 2px rgba(204, 204, 204, 0.1)',
        'rectangle': '0px 2px 2px 2px rgba(204, 204, 204, 0.1)',

      },
    },
  },
  plugins: [],
}
