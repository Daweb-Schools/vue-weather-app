<template>
  <main v-if="currentWeather" class="main-container">
    <button @click="saveLocation">Save Location</button>
    <CityStats :weather="currentWeather" />

    <TodayWeather :weather="currentWeather" />

    <NextDaysWeather :weather="currentWeather" />
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import TodayWeather from "../components/TodayWeather.vue";
import NextDaysWeather from "../components/NextDaysWeather.vue";
import CityStats from "../components/CityStats.vue";

const route = useRoute();
const store = useStore();
const apiKey = "4fc7e8597c81471a8ed223059221605";
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;
const location = route.query.location;
var currentWeather = ref(null);

onMounted(async () => {
  await getWeather(location);
});

async function getWeather(location) {
  if (location) {
    return fetch(`${url}&q=${location}&days=7&aqi=no&alerts=no`)
      .then((response) => response.json())
      .then((data) => {
        currentWeather.value = data;
      });
  }
}

function saveLocation() {
  store.dispatch(
    "addLocation",
    `${currentWeather.value.location.name},${currentWeather.value.location.country}`
  );
}
</script>

<style>
@import "@/assets/base.css";
</style>
