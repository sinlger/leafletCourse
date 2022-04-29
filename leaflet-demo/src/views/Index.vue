<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <div id="map"></div>
    </el-col>
    <el-col :span="12">
      <el-input style="width:300px" placeholder="请输入层级" v-model="zoom" @keyup.enter="setZoom(zoom)"></el-input>
      <br>
      <el-input style="width:150px" placeholder="请输经纬度" v-model="lnglat" @keyup.enter="setView(lnglat)"></el-input>
      <br>
      <el-button @click="addGeoJsonFeatures">geojson</el-button>
    </el-col>
  </el-row>
</template>
<script>
import { getCurrentInstance, onMounted, ref } from 'vue'

export default {
  setup(props) {
    const zoom = ref(10)
    const lnglat = ref()
    let map = null
    const { proxy } = getCurrentInstance()
    const { leaflet } = proxy
    const openstreetmap = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    /**图层初始化 */
    const layers = [
      openstreetmap
    ]
    /**大小控制按钮 */
    const zoomContrl = leaflet.control.zoom({
      position: 'bottomright'
    })
    /**版权信息 */
    const attributionControl = leaflet.control.attribution({
      prefix: "你好leaflet",
      position: 'bottomleft'
    })
    /**图层控制 */
    /**基础图层 */
    const baseLayer = {
      "osm": openstreetmap
    }
    /**添加的图层 */
    const overLayer = {}
    const layerControl = leaflet.control.layers(baseLayer, overLayer, {
      collapsed: true,
    })
    /**比例尺 */
    const scaleControl = leaflet.control.scale({
      position: "bottomright",
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
      scaleControl.addTo(map)
      attributionControl.addTo(map)
      zoomContrl.addTo(map)
      layerControl.addTo(map)
    }
    /**地图放大缩小 */
    const setZoom = (value) => {
      console.log(value);
      map.setZoom(value)
    }
    /**设置地图中心点 */
    const setView = (value) => {
      console.log(value);
      let lnglat = value.split(',')
      map.setView(lnglat, zoom.value)
    }
    /**创建点位 */
    const createPoint = () => {
      let points = leaflet.marker([40, 115])
      points.addTo(map)
    }
    /**创建线*/
    const createPolyline = () => {
      let polyline = leaflet.polyline([[20, 115], [10, 120]], {
        color: "red"
      })
      polyline.addTo(map)
    }

    /**创建面*/
    const createPolygon = () => {
      let polygon = leaflet.polygon([
        [20, 115],
        [40, 115],
        [40, 125],
      ])
      polygon.addTo(map)
    }

    /**创建圆*/
    const createCricle = () => {
      let circler = leaflet.circle([40, 115], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5000
      })
      circler.addTo(map)
    }
    /**使用geojson添加要素 */
    const addGeoJsonFeatures = () => {
      let geojson = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                115,
                42
              ]
            }
          }
        ]
      }
      let geojsonLayer = leaflet.geoJSON(geojson)
      geojsonLayer.addTo(map)
    }
    /**地图初始化 */
    onMounted(() => {
      initMap()
      createPoint()
      createPolygon()
      createCricle()
      createPolyline()
    })
    return {
      setZoom,
      setView,
      lnglat,
      zoom,
      addGeoJsonFeatures
    }
  }
}
</script>
<style lang="postcss" scoped>
#map {
  width: 100%;
  height: 800px;
}
</style>