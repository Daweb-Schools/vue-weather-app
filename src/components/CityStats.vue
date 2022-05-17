<template>
  <div class="location-and-date">
    <h1 class="location-and-date__location">
      {{ weather.location.name }}, {{ weather.location.country }}
    </h1>
    <div>
      {{ moment.unix(weather.location.localtime_epoch).format("dddd DD MMMM") }}
    </div>
  </div>
  <div class="current-temperature">
    <div class="current-temperature__icon-container">
      <img
        :src="weather.current.condition.icon"
        class="current-temperature__icon"
        :alt="weather.current.condition.text"
      />
    </div>
    <div class="current-temperature__content-container">
      <div class="current-temperature__value">
        {{ weather.current.temp_c }}&deg;
      </div>
      <div class="current-temperature__summary">
        {{ weather.current.condition.text }}
      </div>
    </div>
  </div>

  <div class="current-stats">
    <div>
      <div class="current-stats__value">
        {{ weather.forecast.forecastday[0].day.maxtemp_c }}&deg;
      </div>
      <div class="current-stats__label">High</div>
      <div class="current-stats__value">
        {{ weather.forecast.forecastday[0].day.mintemp_c }}&deg;
      </div>
      <div class="current-stats__label">Low</div>
    </div>
    <div>
      <div class="current-stats__value">{{ weather.current.wind_mph }}mph</div>
      <div class="current-stats__label">Wind</div>
      <div class="current-stats__value">
        {{ weather.current.pressure_in }}in
      </div>
      <div class="current-stats__label">Pressure</div>
    </div>
    <div>
      <div class="current-stats__value">{{ weather.current.humidity }}%</div>
      <div class="current-stats__label">Humidity</div>
      <div class="current-stats__value">{{ weather.current.pressure_in }}%</div>
      <div class="current-stats__label">Precipitation</div>
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