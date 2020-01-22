import Vue from 'vue'
import Vuex from 'vuex'
import dogs from "./modules/dogs";
import favorite from "./modules/favorite";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
    },
    modules: {
        dogs,
        favorite
    }
})
