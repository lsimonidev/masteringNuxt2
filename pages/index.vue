<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="float: left; margin: 10px"
    >
      <nuxt-link :to="`/home/${home.objectID}`" no-prefetch>
        <home-card :home="home" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Homepage",
      meta: [
        {
          name: "description",
          content: "This is a Homepage!",
          hid: "description",
        },
      ],
    };
  },
  async asyncData({ params, $dataApi }) {
    const response = await $dataApi.getHome(params.id);
    return {
      home: response.json,
    };
  },
};
</script>
