import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mapboxgl from "mapbox-gl";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJvZG8iLCJhIjoiY2xhemxsMjcxMWFwMDN2cWplc3kwcGsyYyJ9.nkoWKJBvVk9P3X8HjChliA";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
