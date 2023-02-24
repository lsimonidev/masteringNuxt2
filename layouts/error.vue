<template>
  <div class="container">
    <img src="https://i.giphy.com/media/aYpmlCXgX9dc09dbpl/giphy.webp" alt="" />
    <br />
    {{ error.message }} {{ error.statusCode }}
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "OOPS!!!",
    };
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.container {
  text-align: center;
}
</style>