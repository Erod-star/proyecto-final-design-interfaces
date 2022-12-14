import { computed } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "@/store";
import Mapboxgl from "mapbox-gl";

export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    duration: computed(() => store.state.map.duration),
    distance: computed(() => store.state.map.distance),

    // Getters
    isMapReady: computed<boolean>(() => store.getters["map/isMapReady"]),

    // Mutations
    setMap: (map: Mapboxgl.Map) => store.commit("map/setMap", map),

    // Actions
  };
};
