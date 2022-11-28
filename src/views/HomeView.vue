<template>
  <div id="home">
    <button
      type="button"
      class="about-button btn btn-info"
      @click="navigateToAbout"
    >
      Navigate to the about page!
    </button>
    <h1>Welcome to the new porject!</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePlacesStore } from "@/composables";

import router from "@/router";

export default defineComponent({
  name: "HomeView",
  components: {},
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
