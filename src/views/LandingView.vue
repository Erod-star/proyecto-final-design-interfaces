<template>
  <NavBar :isLoggedIn="true" />
  <div id="landing">
    <!-- BALANCE -->
    <div class="balance">
      <div>
        <h2 class="balance__label">Current balance</h2>
        <p class="balance__date">As of <span class="date">05/03/2037</span></p>
      </div>
      <p class="balance__value">5,350€</p>
    </div>

    <!-- MOVEMENTS -->
    <div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">4 000€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div class="movements__date">24/01/2037</div>
        <div class="movements__value">-378€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div class="movements__date">24/01/2038</div>
        <div class="movements__value">-378€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">4 000€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">4 000€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">4 000€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">4 000€</div>
      </div>
    </div>

    <!-- BUTTONS -->
    <button class="button btn btn-warning" @click="navigateToPayment">
      Transfer money
    </button>
    <button class="button btn btn-success" @click="navigateToPayment">
      Request a loan
    </button>

    <!-- SUMMARY -->
    <div class="summary">
      <p class="summary__label">In</p>
      <p class="summary__value summary__value--in">0000€</p>
      <p class="summary__label">Out</p>
      <p class="summary__value summary__value--out">0000€</p>
      <p class="summary__label">Interest</p>
      <p class="summary__value summary__value--interest">0000€</p>
      <button class="btn--sort">&downarrow; SORT</button>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import router from "@/router";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    return {
      navigateToPayment: () => router.push("/payment"),
    };
  },
});
</script>

<style scoped>
#landing {
  padding: 2em;
}
.balance {
  grid-column: 1 / span 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.balance__label {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: -0.2rem;
}

.balance__date {
  margin-top: 5px;
  font-size: 0.9rem;
  color: #888;
}

.balance__value {
  font-size: 2.5rem;
  font-weight: 400;
}

/* MOVEMENTS */
.movements {
  grid-row: 2 / span 3;
  background-color: #fff;
  border-radius: 1rem;
  overflow-y: auto;
  max-height: 400px;
}

.movements__row {
  padding: 2.25rem 4rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.movements__type {
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  padding: 0.1rem 1rem;
  border-radius: 10rem;
  margin-right: 2rem;
}

.movements__date {
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #666;
}

.movements__type--deposit {
  background-image: linear-gradient(to top left, #39b385, #9be15d);
}

.movements__type--withdrawal {
  background-image: linear-gradient(to top left, #e52a5a, #ff585f);
}

.movements__value {
  font-size: 1.7rem;
  margin-left: auto;
}

/* SUMMARY */
.summary {
  grid-row: 5 / 6;
  display: flex;
  align-items: baseline;
  padding: 0 0.3rem;
  margin-top: 1rem;
}

.summary__label {
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 0.8rem;
}

.summary__value {
  font-size: 1.5rem;
  margin-right: 2.5rem;
}

.summary__value--in,
.summary__value--interest {
  color: #66c873;
}

.summary__value--out {
  color: #f5465d;
}

.button {
  margin-top: 10px;
  margin-left: 10px;
}
.btn--sort {
  margin-left: auto;
  border: none;
  background: none;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
}
</style>
