const autoprefixer = require("autoprefixer");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

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
  config.addPlugin(EleventyRenderPlugin);

  // Copy files
  config.addPassthroughCopy({
    "src/assets/img": "assets/img",
    "src/assets/svg": "assets/svg",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
      "assets/js/bootstrap.js",
    "node_modules/@midzer/tobii/dist/tobii.min.js": "assets/js/lightbox.js",
    "src/assets/js": "assets/js",
    "src/robots.txt": "/robots.txt",
    "src/_redirects": "/_redirects",
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
