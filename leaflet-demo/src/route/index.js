import { createRouter,createWebHistory } from "vue-router";
const router = createRouter({
    history:createWebHistory(),
    routes:[{
        path:"/",
        component:()=>import(/* webpackChunkName: "dashboard" */ '../views/Index.vue')
    }]
})


export default router