<template>
  <div class="next-3-days">
    <h2 class="next-3-days__heading">Next 3 days</h2>
    <div class="next-3-days__container">
      <div class="next-3-days__row" v-for="(day, index) in weather.forecast.forecastday" :key="index">
        <div class="next-3-days__date">
          {{moment.unix(day.date_epoch).format("ddd")}}
          <div class="next-3-days__label">{{moment.unix(day.date_epoch).format("DD/MM")}}</div>
        </div>

        <div class="next-3-days__low">
          {{day.day.mintemp_c}}&deg;
          <div class="next-3-days__label">Low</div>
        </div>

        <div class="next-3-days__high">
          {{day.day.maxtemp_c}}&deg;
          <div class="next-3-days__label">High</div>
        </div>

        <div class="next-3-days__icon">
          <img
            :src="day.day.condition.icon"
            :alt="day.day.condition.text"
          />
        </div>

        <div class="next-3-days__rain">
          {{day.day.daily_chance_of_rain}}%
          <div class="next-3-days__label">Rain</div>
        </div>

        <div class="next-3-days__wind">
          {{day.day.maxwind_mph}}mph
          <div class="next-3-days__label">Wind</div>
        </div>
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