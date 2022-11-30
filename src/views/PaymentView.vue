<template>
  <NavBar :isLoggedIn="true" />
  <div class="payment-container">
    <h3>Introduce your card in order to continue</h3>
    <div class="payment-form">
      <v-text-field
        class="owner-input"
        label="Owner"
        variant="outlined"
        type="text"
        v-model="owner"
      />
      <v-text-field
        class="card-input"
        label="Card"
        variant="outlined"
        type="number"
        maxlength="3"
        v-model="card"
      />
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
        maxlength="3"
        v-model="cvc"
      />
      <img src="../assets/finalcard.png" alt="card" class="card" />
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
    const owner = ref("");
    const card = ref("");
    const initialDate = ref("2022-11-11");
    const cvc = ref("");

    const confirmPayment = () => {
      if (owner.value == "" && owner.value.length > 3)
        return alert("The owner is required");
      if (card.value == "") return alert("The card is required");
      if (initialDate.value == "") return alert("The expiry is required");
      if (cvc.value == "") return alert("The CVC is required");
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
      owner,
      card,
      cvc,
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.owner-input {
  grid-column: 1/4;
  grid-row: 1;
}
.card-input {
  grid-column: 1;
  grid-row: 2;
}
.expiry-field {
  grid-column: 2;
  grid-row: 2;
}
.cvc-field {
  grid-column: 3;
  grid-row: 2;
}
.card {
  width: 200px;
  height: 200px;
  grid-column: 2;
  grid-row: 3;
  justify-self: center;
}

.button-margin {
  margin-left: 20px;
}

@media screen and (max-width: 780px) {
  .card-input {
    grid-column: 1/4;
    grid-row: 2;
  }
  .expiry-field {
    grid-column: 1;
    grid-row: 3;
  }
  .cvc-field {
    grid-column: 2;
    grid-row: 3;
  }

  .card {
    width: 200px;
    height: 200px;
    grid-column: 2;
    grid-row: 4;
  }
}

@media screen and (max-width: 680px) {
  .expiry-field {
    grid-column: 1/4;
    grid-row: 3;
  }
  .cvc-field {
    grid-column: 1/3;
    grid-row: 4;
  }

  .card {
    width: 200px;
    height: 200px;
    grid-column: 2;
    grid-row: 5;
  }
}

@media screen and (max-width: 480px) {
  .payment-container h3 {
    font-size: 20px;
    text-align: center;
  }
  .cvc-field {
    grid-column: 1/4;
    grid-row: 4;
  }
}
</style>
