const autoprefixer = require("autoprefixer");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  // Plugins
  config.addPlugin(eleventySass, {
    postcss: postcss([autoprefixer]),
    sass: {
      style: "compressed",
      sourceMap: false,
    },
  });
  config.addPlugin(syntaxHighlight);

  // Copy files
  config.addPassthroughCopy({
    "src/assets/img": "assets/img",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
      "assets/js/bootstrap.js",
    "node_modules/@midzer/tobii/dist/tobii.min.js": "assets/js/lightbox.js",
    "src/assets/js": "assets/js",
  });

  // BrowserSync
  config.setBrowserSyncConfig({
    open: true,
  });

  // Options
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
    },
    htmlTemplateEngine: "njk",
  };
};
