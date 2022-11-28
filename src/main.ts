import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJvZG8iLCJhIjoiY2xhemxsMjcxMWFwMDN2cWplc3kwcGsyYyJ9.nkoWKJBvVk9P3X8HjChliA";

if (!navigator.geolocation) {
  throw new Error("Your browser doesn't support the GeoLocation");
}

createApp(App).use(store).use(router).mount("#app");
