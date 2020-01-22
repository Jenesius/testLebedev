import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewMain from "../view/ViewMain";
import AppFavorite from "../components/AppFavorite";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: ViewMain
    },
    {
        path: '/favorite',
        name: 'favorite',
        component: AppFavorite
    }
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

export default router;
