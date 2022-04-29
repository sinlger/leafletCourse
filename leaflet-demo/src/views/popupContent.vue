<template>
  <div id="map">

  </div>
  <div id="box"></div>
</template>
<script>
import useMap from "@/hooks/useMap";
import { getCurrentInstance, onMounted, createApp } from "vue";
import * as Vue from 'vue'
import popupBox from "@/components/popupBox.vue";
export default {
  components: { popupBox },
  setup(props) {
    const { map, layerGroup } = useMap()
    const { proxy } = getCurrentInstance()
    const { leaflet } = proxy
    /** */
    const addPoint = () => {
      let points = leaflet.marker([37, 114])
      layerGroup.addLayer(points)
      layerGroup.eachLayer(item => {
        item.bindPopup("<div id='box'></div>")
      })
    }

    onMounted(() => {
      addPoint()
    })
    return {


    }
  }
}
</script>
<style lang="postcss">
#map {
  width: 500px;
  height: 700px;
}
</style>