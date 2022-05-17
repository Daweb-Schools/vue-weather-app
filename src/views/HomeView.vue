<template>
  <div class="search-container">
    <div class="form-holder">
      <div class="form">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          @keyup.enter="getWeather(city)"
          type="text"
          v-model="city"
          class="form-control form-input"
          placeholder="Search for a city..."
        />
        <span @click="getCurrentLocation" class="left-pan"
          ><i class="fa-solid fa-location-crosshairs"></i
        ></span>
      </div>
    </div>

    <template v-if="locations && locations.length">
      <h2>Saved Citites:</h2>
      <div class="saved-cities-container">
        <div
          class="saved-cities-item"
          v-for="(location, index) in locations"
          :key="index"
          @click="getWeather(location)"
        >
          <div class="saved-cities-name">{{ location }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();

const locations = computed(() => store.getters.locations);
const location = ref("");
const router = useRouter();

function getWeather(location) {
  router.push({
    name: "location",
    query: {
      location: location,
    },
  });
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    location.value = `${lat},${lon}`;
    getWeather(location.value);
  });
}
</script>

<style scoped>
</style>