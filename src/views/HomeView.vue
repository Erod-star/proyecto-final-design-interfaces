<template>
  <div id="home">
    <NavBar />

    <div class="home-content">
      <h1 class="d-flex justify-content-center heading">
        Welcome to the BanMalan website!!
      </h1>
      <img
        src="../assets/wallpaper.webp"
        alt="bank location"
        class="wallpaper"
      />
      <div class="home-content-details">
        <h3>Check your account right now!</h3>
        <p>You only need to sign in it's so easy!</p>
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="navigateToLanding"
        >
          Go to your account!!
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import router from "@/router";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
  },
  setup() {
    return {
      // Methods
      navigateToLanding: () => router.push("/landing"),
    };
  },
});
</script>

<style scoped>
/* ? Body */
.home-content {
  padding: 2rem;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-content h1 {
  font-weight: bold;
  margin-top: 20px;
}

.wallpaper {
  width: 600px;
  height: 400px;
  border-radius: 5px !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin-top: 25px;
}

.home-content-details {
  border-radius: 5px !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  top: -80px;
  margin: 0px 50px;
  height: 200px;
  width: 80%;
  justify-content: center;
  align-items: center;
}

.home-content-details h3 {
  font-size: 30px;
}
.home-content-details p {
  font-size: 20px;
}
</style>
