<template>
  <div>
    <div style="display: flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        :alt="home.title"
        width="200"
        height="150"
      />
    </div>
    <h3>{{ home.title }}</h3>

    <p>{{ home.pricePerNight }} /night</p>
    <p>
      <img src="/images/marker.svg" alt="marker" width="20" height="20" />
      {{ home.location.address }} {{ home.location.city }}
      {{ home.location.state }} {{ home.location.country }}
    </p>
    <p>
      <img src="/images/star.svg" alt="star" width="20" height="20" />
      {{ home.reviewValue }}
    </p>
    <p>
      {{ home.guests }} guests, {{ home.bedrooms }} bedrooms,
      {{ home.beds }} beds, {{ home.bathrooms }} bathrooms.
    </p>
    <p>{{ home.description }}</p>
    <div style="height: 800px; width: 800px" ref="map"></div>
    <div v-for="review in reviews" :key="review.ObjectID">
      <img :src="review.reviewer.image" alt="" /><br />
      {{ review.reviewer.name }} <br />
      {{ formatDate(review.date) }} <br />
      <short-text :text="review.comment" target="150"></short-text>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.home.title,
    };
  },
  async asyncData({ params, $dataApi, error }) {
    const homeResponse = await $dataApi.getHome(params.id);
    if (!homeResponse.ok)
      return error({
        statusCode: homeResponse.status,
        message: homeResponse.statusText,
      });
    const reviewResponse = await $dataApi.getReviewsByHomeId(params.id);
    if (!reviewResponse.ok)
      return error({
        statusCode: reviewResponse.status,
        message: reviewResponse.statusText,
      });
    return {
      home: homeResponse.json,
      reviews: reviewResponse.json.hits,
    };
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
      });
    },
  },
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.home._geoloc.lat,
      this.home._geoloc.lng
    );
  },
};
</script>