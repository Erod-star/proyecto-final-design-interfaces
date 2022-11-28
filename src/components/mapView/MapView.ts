import { defineComponent, ref, onMounted, watch } from "vue";
import Mapboxgl from "mapbox-gl";

import { usePlacesStore, useMapStore } from "@/composables";

export default defineComponent({
  name: "MapView",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { isUserLocationReady, userLocation } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {
      if (!mapElement.value) throw new Error("Div element not exist");
      if (!userLocation.value) throw new Error("User location not found :(");

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      const myLocationPopup = new Mapboxgl.Popup({
        offset: [0, -25],
      }).setLngLat(userLocation.value).setHTML(`
          <h4>Aquí toy</h4>
          <p>Actualmente en Amsterdam B)</p>
          <p>${userLocation.value}</p>
        `);

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .addTo(map)
        .setPopup(myLocationPopup);

      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(isUserLocationReady, () => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      userLocation,
      mapElement,
    };
  },
});
