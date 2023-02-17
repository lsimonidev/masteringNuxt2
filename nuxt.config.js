export default {
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt: %s",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: ["my-style"],
    },
  },
  router: {
    prefetchLinks: false,
  },
  plugins: ["~/plugins/maps.client"],
};
