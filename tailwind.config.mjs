/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        doglady: "url('../images/cdn/doglady.webp')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      tan: "#e8e2d1",
      "tan-dark": "#565584",
      peach: "#ffefe6",
    },
    fontFamily: {
      sans: ["Cormorant\\ Garamond", "sans-serif"],
      serif: ["UnifrakturMaguntia", "serif"],
      display: ["Fondamento", "serif"],
      numbers: ["Cormorant\\ Infant", "serif"],
    },
  },
  daisyui: {
    themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [
    require("daisyui", "@tailwindcss/forms"),
    iconsPlugin({
      collections: getIconCollections(["f7", "solar", "game-icons", "logos"]),
    }),
  ],
};
