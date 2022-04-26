<template>
  <div id="map"></div>
</template>
<script>
import { getCurrentInstance, onMounted } from 'vue'

export default {
  setup(props) {
    const { proxy } = getCurrentInstance()
    const { leaflet } = proxy
    const layers = [
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ]

    const initMap = () => {
      const map = leaflet.map('map', {
        center: [40, 115],
        zoom: 8,
        crs: leaflet.CRS.EPSG3857,
        layers: layers,
        maxZoom: 18,
        minZoom: 1,
        attributionControl:false,
        zoomControl:false
      });
      //   leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
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
  width: 1000px;
  height: 800px;
}
</style>