<template>
  <div class="weather-by-hour">
    <h2 class="weather-by-hour__heading">Today's weather</h2>
    <div class="weather-by-hour__container">
      <div class="weather-by-hour__item" v-for="(hour, index) in weather.forecast.forecastday[0].hour.slice(0, 20).filter((hour,index) => index % 3 == 0 )" :key="index">
        <div class="weather-by-hour__hour">{{moment.unix(hour.time_epoch).format("ha")}}</div>
        <img
          :src="hour.condition.icon"
          :alt="hour.condition.text"
        />
        <div>{{hour.temp_c}}&deg;</div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";
import moment from "moment";
defineProps({
  weather: {
    type: Object,
    default: () => ({}),
  },
});
</script>