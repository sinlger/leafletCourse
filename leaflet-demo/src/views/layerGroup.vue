<template>
  <div id="map"></div>
  <el-button @click="addFeatureLayerGroup">添加点位</el-button>
  <el-button @click="">删除点位</el-button>
</template>
<script>
import { getCurrentInstance, onMounted } from "vue";
export default {
  setup(props) {
    const { proxy } = getCurrentInstance()
    const { leaflet } = proxy
    let map = null
    const layerGroup = leaflet.layerGroup()
    const layers = [
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ]
    /**地图初始化 */
    const initMap = () => {
      map = leaflet.map('map', {
        center: [40, 115],
        zoom: 8,
        crs: leaflet.CRS.EPSG3857,
        layers: layers,
        maxZoom: 18,
        minZoom: 1,
        attributionControl: false,
        zoomControl: false
      });
      layerGroup.addTo(map)
    }
    onMounted(() => {
      initMap()
    })

    /**创建图层组 */
    const addFeatureLayerGroup = () => {
      let point = leaflet.marker([40, 115])
      layerGroup.addLayer(point)
    }
    /**隐藏图层 */
    const hiddenLayerGroup=()=>{
        // layerGroup.
    }

    return {
      addFeatureLayerGroup
    }
  }
}
</script>
<style lang="postcss">
#map {
  width: 400px;
  height: 800px;
}
</style>