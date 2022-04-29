<template>
  <div id="map">

  </div>
</template>
<script>
import useMap from "../hooks/useMap"
export default {
  setup() {
    const { map, leaflet, layerGroup } = useMap()

    




  }
}
</script>
<style lang="postcss">
#map {
  width: 600px;
  height: 600px;
}
</style>