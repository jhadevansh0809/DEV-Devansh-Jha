/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
    },

    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1050px'},

      'md': {'max': '840px'},

      'sm': {'max': '600px'},

    }

    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
