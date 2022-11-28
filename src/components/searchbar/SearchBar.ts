import { ref, computed } from "vue";
import { defineComponent } from "@vue/runtime-core";

import SearchResults from "@/components/search-results/SearchResults.vue";

export default defineComponent({
  name: "SearchBar",
  components: { SearchResults },
  //https:
  //api.mapbox.com/geocoding/v5/mapbox.places/colima.json?limit=5&proximity=-103.7359200375308%2C19.266280875375926&language=en&access_token=pk.eyJ1IjoiZXJvZG8iLCJhIjoiY2xhemxsMjcxMWFwMDN2cWplc3kwcGsyYyJ9.nkoWKJBvVk9P3X8HjChliA
  setup() {
    const debounceTimeout = ref();
    const debounceValue = ref("Hola");

    return {
      debounceValue,
      searchTerm: computed({
        get() {
          return debounceValue.value;
        },
        set(val: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

          debounceTimeout.value = setTimeout(() => {
            debounceValue.value = val;
          }, 1000);
        },
      }),
    };
  },
});
