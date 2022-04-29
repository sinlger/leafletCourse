import {
    createApp
} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/route/index.js'
import App from './App.vue'
import * as leaflet from "leaflet"
import 'leaflet/dist/leaflet.css'
import "leaflet.markercluster"
const app = createApp(App)

//挂在全局属性
app.config.globalProperties.leaflet = leaflet

app.use(ElementPlus)
app.use(router)
app.mount('#app')