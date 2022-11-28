import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        commit("setLatLng", { lng: coords.longitude, lat: coords.latitude });
      },
      (err) => {
        throw new Error("No Geolocation founded :(");
      }
    );
  },
};

export default actions;
