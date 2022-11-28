<template>
  <div id="map-view">
    <div
      v-if="!isUserLocationReady"
      class="loading-map d-flex justify-content-center align-items-center"
    >
      <div class="text-center">
        <h3>Wait please...</h3>
        <span>Locating</span>
      </div>
    </div>

    <div v-show="isUserLocationReady" class="map-container" ref="mapElement" />
  </div>
</template>

<script lang="ts" src="./MapView.ts" />

<style scoped>
#map-view .loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0px;
  width: 100vh;
  z-index: 999;
}

#map-view .map-container {
  position: fixed;
  height: 100vh;
  width: 100vh;
  background-color: lavender;
}
</style>
