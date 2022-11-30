<template>
  <nav class="d-flex login-navbar">
    <p v-if="!isLoggedIn" class="welcome">Log in to get started</p>
    <p v-else class="welcome">Welcome back Silvia!</p>
    <img src="../assets/logo.png" alt="BanMalan logo" class="logo" />
    <form v-if="!isLoggedIn" ref="form" class="login d-flex">
      <v-text-field label="User" variant="outlined" v-model="user" />
      <v-text-field
        label="PIN"
        variant="outlined"
        v-model="pin"
        type="number"
      />
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
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",
  props: {
    isLoggedIn: { type: Boolean, default: false },
  },
  setup() {
    const user = ref("");
    const pin = ref("");

    const navigateToLanding = () => {
      if (user.value == "") return alert("The user is required");
      if (pin.value == "") return alert("The pin is required");
      router.push("/landing");
    };

    return {
      navigateToLanding,
      logout: () => router.push("/"),
      user,
      pin,
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
  height: 55px;
  width: 55px;
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

@media screen and (max-width: 680px) {
  .login-navbar {
    display: flex;
    flex-direction: column;
  }
  .welcome {
    display: none;
  }

  .logo {
    height: 30px;
    width: 30px;
  }

  .v-input {
    display: none;
  }

  .v-btn {
    display: none;
  }
}
</style>
