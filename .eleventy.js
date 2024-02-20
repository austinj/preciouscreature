const autoprefixer = require("autoprefixer");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const schema = require("@quasibit/eleventy-plugin-schema");

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
  config.addPlugin(schema);

  // Shortcode
  config.addShortcode("imgGallery", function(fileName, altText, dataGroup) {
    return `<div class="col p-2">
<a href="assets/img/${dataGroup}/${fileName}" class="lightbox" data-group="${dataGroup}" data-zoom="false">
<img src="assets/img/${dataGroup}/${fileName}" class="img-fluid" alt="${altText}"  srcset="assets/img/${dataGroup}/sm_${fileName} 299w, assets/img/${dataGroup}/md_${fileName} 500w, assets/img/${dataGroup}/lg_${fileName} 718w, assets/img/${dataGroup}/xl_${fileName} 838w">
</a>
</div>`;
  });

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
    "src/assets/img/favicon": "/"
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
