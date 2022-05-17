import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import { location } from "./store/location";

const store = createStore({
  modules: {
    location,
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
