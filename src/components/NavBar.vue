<template>
  <nav class="d-flex login-navbar">
    <p v-if="!isLoggedIn" class="welcome">Log in to get started</p>
    <p v-else class="welcome">Welcome back Silvia!</p>
    <img src="../assets/logo.png" alt="BanMalan logo" class="logo" />
    <form v-if="!isLoggedIn" class="login d-flex">
      <v-text-field label="User" variant="outlined" />
      <v-text-field label="PIN" variant="outlined" />
      <v-btn
        clss="button-login"
        icon="mdi-heart"
        color="blue-grey"
        @click="navigateToLanding"
      >
        &rarr;</v-btn
      >
    </form>
    <v-btn v-else variant="tonal" @click="logout">Log-out</v-btn>
  </nav>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",
  props: {
    isLoggedIn: { type: Boolean, default: false },
  },
  setup() {
    return {
      navigateToLanding: () => router.push("/landingView"),
      logout: () => router.push("/"),
    };
  },
});
</script>

<style scoped>
nav {
  padding: 20px !important;
  background-color: #dbdbdb;
}
.login-navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
}
.welcome {
  font-size: 1.3rem;
  font-weight: 500;
}
.logo {
  height: 3.25rem;
  width: 3.25rem;
}
.login__input {
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1.6rem;
  font-family: inherit;
  text-align: center;
  width: 12rem;
  border-radius: 10rem;
  margin-right: 1rem;
  color: inherit;
  border: 1px solid #fff;
  transition: all 0.3s;
}
.v-input {
  margin-right: 10px;
  border-radius: 10px;
  width: 100px;
}

.v-input ::v-deep .v-input__control input {
  border-radius: 10px !important;
}

.button-login {
  color: white !important;
}
</style>
