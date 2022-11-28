import { MutationTree } from "vuex";
import { PlacesState } from "./state";

interface CoordsProps {
  lng: number;
  lat: number;
}

const mutation: MutationTree<PlacesState> = {
  setLatLng(state: PlacesState, { lat, lng }: CoordsProps) {
    console.log("::coords", {
      lat,
      lng,
    });
    state.userLocation = [lng, lat];
    state.isLoading = false;
  },
};

export default mutation;
