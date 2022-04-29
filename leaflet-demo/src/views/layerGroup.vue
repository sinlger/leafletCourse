<template>
  <div id="map"></div>
  <el-button @click="addFeatureLayerGroup">添加点位</el-button>
  <el-button @click="clearLayerGroup">清空图层</el-button>
  <el-button @click="deleteFeature">删除特定点位</el-button>
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
    /**自定义icon */
    const icon = leaflet.icon({
      iconUrl: '../icon.png',
      iconSize: [38, 38],
    })
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

    let point1, point2
    /**创建图层组 */
    const addFeatureLayerGroup = () => {
      point1 = leaflet.marker([40, 115], {
        id: 1,
        title: "你好",
        icon: icon
      })
      point2 = leaflet.marker([41, 115], {
        id: 2
      }).bindPopup("你好")
      for (let i of [point1, point2]) {
        layerGroup.addLayer(i)
      }

    }
    /**删除图层 */
    const clearLayerGroup = () => {
      layerGroup.clearLayers()
    }
    /**删除某一要素 */
    const deleteFeature = () => {
      let ids = layerGroup.getLayers()
      let id = ids.find(item => {
        if (item.options.id == 1) {
          return item._leaflet_id
        }
      })
      layerGroup.removeLayer(id)
    }
    return {
      addFeatureLayerGroup,
      clearLayerGroup,
      deleteFeature
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