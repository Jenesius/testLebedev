import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMainDogsList from "../components/main/AppMainDogsList";
import AppFavorite from "../components/AppFavorite";
import AppBreedList from "../components/AppBreedList"


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
    routes
});

export default router;
