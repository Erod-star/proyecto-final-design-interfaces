<template>
  <div id="about">
    <h1>This is an about page</h1>
    <!-- <HelloWorld /> -->
    <AwesomeCard />
    <button type="button" class="btn btn-info" @click="navigateToHome">
      Navigate to the home page!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import AwesomeCard from "@/components/awesome-card/AwesomeCard.vue";
import router from "@/router";

export default defineComponent({
  name: "AboutView",
  components: {
    // HelloWorld,
    AwesomeCard,
  },
  setup() {
    return {
      // Methods
      navigateToHome: () => router.push("/"),
    };
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
