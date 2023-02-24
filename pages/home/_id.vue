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
    const response = await $dataApi.getHome(params.id);
    if (!response.ok)
      return error({
        statusCode: response.status,
        message: response.statusText,
      });
    return {
      home: response.json,
    };
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