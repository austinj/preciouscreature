/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        doglady: "url('../images/doglady.webp')",
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
      "tan-light": "#f1eee3",
      "tan-dark": "#d4ccb4",
      peach: "#ffefe6",
    },
    fontFamily: {
      sans: ["Cormorant\\ Garamond", "sans-serif"],
      serif: ["UnifrakturMaguntia", "serif"],
      display: ["Fondamento", "serif"],
      numbers: ["Cormorant\\ Infant", "serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    iconsPlugin({
      collections: getIconCollections(["f7", "solar", "game-icons", "logos"]),
    }),
  ],
};