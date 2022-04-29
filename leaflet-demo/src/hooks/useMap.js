import {
    onMounted,
    getCurrentInstance
} from "vue";

export default function () {
    let map
    const {
        proxy
    } = getCurrentInstance()
    const {
        leaflet
    } = proxy
    const layerGroup = leaflet.layerGroup()
    const layers = [
        leaflet.tileLayer('http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}')
    ]
    const init_map = () => {
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
        init_map()
    })
    return {
        map,
        layerGroup
    }

}