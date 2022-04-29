import {
    createRouter,
    createWebHistory
} from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        component: () => import( /* webpackChunkName: "dashboard" */ '../views/Index.vue')
    }, {
        path: "/layerGroup",
        component: () => import( /* webpackChunkName: "dashboard" */ '../views/layerGroup.vue')
    }, {
        path: "/popup",
        component: () => import( /* webpackChunkName: "dashboard" */ '../views/popupContent.vue')
    }, {
        path: "/markercluster",
        component: () => import( /* webpackChunkName: "dashboard" */ '../views/markercluster.vue')
    }]
})


export default router