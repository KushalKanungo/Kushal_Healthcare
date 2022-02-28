const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      themegreen: '#32E0C4',
      themegreendark: '#29b9a1',
      themegray: '#393E46',
      themedark: '#222831'

    }
  },
  plugins: [],
}
