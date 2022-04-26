<template>
  <div id="map"></div>
</template>
<script>
import { getCurrentInstance, onMounted } from 'vue'

export default {
  setup(props) {
    const { proxy } = getCurrentInstance()
    const { leaflet } = proxy


    const initMap = () => {
      const map = leaflet.map('map').setView([51.505, -0.09], 13);

      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
    onMounted(() => {
      initMap()
    })
    return {}
  }
}
</script>
<style lang="postcss" scoped>
#map {
  width: 400px;
  height: 400px;
}
</style>