<template>
  <div id="about">
    <h1>This is an about page</h1>
    <HelloWorld />
    <button type="button" class="btn btn-info" @click="navigateToHome">
      Navigate to the home page!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import router from "@/router";

export default defineComponent({
  name: "AboutView",
  components: {
    HelloWorld,
  },
  setup() {
    return {
      // Methods
      navigateToHome: () => router.push("/"),
    };
  },
});
</script>
