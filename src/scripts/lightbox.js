import pswpModule from "photoswipe";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

const lightbox = new PhotoSwipeLightbox({
  pswpModule,
  children: "a",
  gallery: "#my-gallery",
  showHideAnimationType: "fade",
  imageClickAction: "next",
  tapAction: "zoom",
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  // Plugins options, for example:
  type: "auto",
});

document.addEventListener(
  "astro:page-load",
  () => {
    if (lightbox) lightbox.init();
  },
  { once: false },
);
