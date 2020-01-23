import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMainDogsList from "../components/main/AppMainDogsList";
import AppFavorite from "../components/main/AppFavorite";
import AppBreedList from "../components/main/AppBreed"


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        components: {
            'main': AppMainDogsList,
        }
    },
    {
        path: '/favorite',
        components:{
            'main': AppFavorite,
        }
    },
    {
        path: '/:bear',
        components:{
            'main': AppBreedList,
        }
    }
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes
});

export default router;
