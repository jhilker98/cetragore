module.exports = {
  content: [
    "layouts/**/*.html",
    "content/**/*.md"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cetblack: {
          "50": "#f4f4f4",
          "100": "#e9eae9",
          "200": "#c9c9c9",
          "300": "#a8a9a9",
          "400": "#676968",
          "500": "#262827",
          "600": "#222423",
          "700": "#1d1e1d",
          "800": "#171817",
          "900": "#131413"
        },
        malachite: {
          "50": "#f2fcf2",
          "100": "#e6f9e6",
          "200": "#bff1bf",
          "300": "#99e999",
          "400": "#4dd84d",
          "500": "#00c700",
          "600": "#00b300",
          "700": "#009500",
          "800": "#007700",
          "900": "#006200"
        },
        cetgreen: {
          0: '#D2FFCC',
          100: '#A5FF99',
          200: '#78FF66',
          300: '#4BFF33',
          400: '#1EFF00',
          500: '#18CC00',
          600: '#129900',
          700: '#0C6600',
          800: '#063300'
        },
      },
       fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        bebasNeue: ['"Bebas Neue"', "cursive"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
