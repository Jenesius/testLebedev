"use strict";

import localStorage from "./../../assets/js/localStorage";

//state
const state = {
    favoriteArray: localStorage.getList(),
};

//getters
const getters = {

};

//actions
const actions = {

};

//mutations
const mutations = {

    remove(state, name){
        localStorage.removeFavorite(name);
        state.favoriteArray = localStorage.getList();
    },
    add(state, name){
        localStorage.addFavorite(name);
        state.favoriteArray = localStorage.getList();
    },
    update(state, name){

        localStorage.updateFavorite(name);
        state.favoriteArray = localStorage.getList();
    }

};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}