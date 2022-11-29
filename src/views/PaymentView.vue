<template>
  <NavBar :isLoggedIn="true" />
  <div class="payment-container">
    <h3>Introduce your card in order to continue</h3>
    <div class="payment-form">
      <v-text-field label="Owner" variant="outlined" type="text" />
      <v-text-field label="Card" variant="outlined" type="number" />
      <div class="d-flex justify-content-between">
        <div>
          <v-text-field
            class="expiry-field"
            label="Expiry"
            variant="outlined"
            type="date"
            v-model="initialDate"
          />
          <v-text-field
            class="cvc-field"
            label="CVC"
            variant="outlined"
            type="number"
          />
        </div>
        <img src="../assets/card.png" alt="card" class="card" />
      </div>
    </div>
    <div class="flex">
      <button class="btn btn-secondary mb-5" @click="navigateToLanding">
        Return to balance
      </button>
      <button
        class="button-margin btn btn-success mb-5"
        @click="confirmPayment"
      >
        Procced
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import router from "@/router";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    const initialDate = ref("2022-11-11");

    const confirmPayment = () => {
      const onConfirm = confirm(
        "Are you sure that your information is correct?"
      );
      if (onConfirm) return navigateToLanding();
    };

    const navigateToLanding = () => router.push("/landing");

    return {
      initialDate,
      navigateToLanding,
      confirmPayment,
    };
  },
});
</script>

<style scoped>
.payment-container {
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 20px;
  border-radius: 5px !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.payment-container h3 {
  margin-top: 40px;
}
.payment-form {
  padding: 2em;
  margin: 10px 40px;
  width: 100%;
  align-items: center;
}

.expiry-field,
.cvc-field {
  width: 100%;
}

.card {
  width: 200px;
  height: 200px;
  margin-right: 100px;
}

.button-margin {
  margin-left: 20px;
}
</style>
