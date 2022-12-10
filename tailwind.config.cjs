/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        45: '45%',
        10: '10%',
        405: '405px',
        50: '50vh,',
        75: '75px',
        412: '412.15px',
        410: '410.75px',
        550: '550px',
        896: '896px',
        '4%': '4%',
        '14%': '14%',
        '20%': '20%'
      },
      backdropBlur: {
        opacityCard: '36.4865px'
      }
    },
    fontFamily: {
      'fontFamilyDefault': ['Lato', 'sans-serif']
    },
    colors: {
      white: '#ffffff',
      littleWhite: '#F6F6F6',
      black: '#000000',
      defaultColor: '#304659',
      colorBtn: "#3a6ad4",
      colorOposityB: 'rgba(255, 255, 255, 0.2)',
      colorBgInput: '#695E6C',
      colorOptional: '#FF6647',
      neutral_n75: '#F9FAFC',
      neutral_n500: "rgba(193, 196, 214, 1)",
    },
    backgroundImage: {
      'imgHeader': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/fc2522dccf9c8bd673f6d40c0f0e8affde6e9c35/bindle/imgStatic/Img.svg")',
      'imgHeaderBig': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle.svg")',
      'imgMiniHeader1': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle2.svg")',
      'imgMiniHeader2': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle4.svg")',
      'imgMiniHeader3': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle3.svg")',
      'imgHeaderPopular': 'url("https://cf.bstatic.com/xdata/images/xphoto/540x405/12097111.jpg?k=ab8d257011c475ed67db40f6ad3dc6339a0ca882f606e5585365ab16411b00d1&o=8")',
      'imgGetTheBest': 'url("https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle%20228.svg")'
    }
  },
  plugins: [],
}
