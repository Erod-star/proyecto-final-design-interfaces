<template>
  <div id="home">
    <button
      type="button"
      class="about-button btn btn-info"
      @click="navigateToAbout"
    >
      Navigate to the about page!
    </button>
    <MapView />
    <SearchBar />
    <MyLocationBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePlacesStore } from "@/composables";

import MapView from "@/components/mapView/MapView.vue";
import SearchBar from "@/components/searchbar/SearchBar.vue";
import MyLocationBtn from "@/components/my-location-btn/MyLocationBtn.vue";
import router from "@/router";

export default defineComponent({
  name: "HomeView",
  components: {
    MapView,
    MyLocationBtn,
    SearchBar,
  },
  setup() {
    usePlacesStore();

    return {
      // Methods
      navigateToAbout: () => router.push("/about"),
    };
  },
});
</script>

<style scoped>
.about-button {
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  left: 10px;
}
</style>
