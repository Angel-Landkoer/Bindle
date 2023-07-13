/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'laptop': '1024px',
        'desktop': '1440px'
      },
      colors: {
        'blue': "#3A6AD4",
        'darkBlue': "#696F8C",
        'charcoal': "#304659",
        'neutral': "#FFFFFF",
        'green': "#34A59F",
        'yellow': "#FFB020",
        'orange': "#FF6647"
      },
      backgroundImage: {
        'headerMobileImgCenter': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/a770cd1a6d9526ef1ed2d13c423f6a30112da8eb/bindle/imgStatic/Img.svg")',
        'headerTable_LaptopImgCenter': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/a770cd1a6d9526ef1ed2d13c423f6a30112da8eb/bindle/imgStatic/Rectangle.svg")',
        'mainMobileImgDiscount': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/58696af2a1823ecfc31b3b9f8de6d5b6e9d1bd02/bindle/imgStatic/Rectangle228.svg")'
      }
    },
  },
  plugins: [],
}