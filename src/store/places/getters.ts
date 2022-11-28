import { GetterTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<PlacesState, StateInterface> = {
  isUserLocationReady({ userLocation }) {
    return !!userLocation;
  },
};

export default getters;
