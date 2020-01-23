"use strict";

import dogsApi from "../../assets/js/dogsApi";

//state
const state = {
    breed: '',
    breedList: [],
};

//getters
const getters = {

};

//actions
const actions = {


    updateList(state, breed){

        // eslint-disable-next-line no-console
        console.log(breed);

        state.commit('setBreed', breed);

        dogsApi.getListAvatarBreed(breed)
            .then(res => {
                state.commit('setBreedList', res);
            })
    }
};

//mutations
const mutations = {
    setBreed(state, breed){
        state.breed = breed;
    },
    setBreedList(state, list){
        state.breedList = list;
    },


};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}