/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: 'rgba(207,96,242,1)'
      },
      screens: {
        // desktop screen media queries
        'customXs': { 'max':'400px'},
        'customSm': { 'max':'640px'},
        'customMd': { 'max':'768px'},
        'customLg': { 'max':'1024px'},
        'customXl': { 'max':'1280px'},
        'custom2Xl': { 'max':'1536px'},
      },
      boxShadow: {
        shadow: '4px 5px 10px 0px #00000099',
      }
    },
  },
  plugins: [],
}

