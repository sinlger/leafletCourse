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
    }]
})


export default router