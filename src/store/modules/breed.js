"use strict";
import dogsApi from "../../assets/js/dogsApi";

//state
const state = {
    breed: '',
    breedList: [],
    fullBreedList : [],
    currentChunk : 0
};

//getters
const getters = {

};

//actions
const actions = {

    // eslint-disable-next-line no-unused-vars
    updateList({dispatch, commit, state}, breed){
        commit('setBreed', breed);
        commit('setChunk', 0);

        dogsApi.getListAvatarBreed(breed)
        .then(res => {
            commit('setFullBreedList', res);
            dispatch('addList');
        })
    },
    addList({ commit, state}){
        setTimeout(()=> {
            let _tmp = state.currentChunk;


            commit('setChunk', (_tmp + 1));
            commit('addNextChunk');
        }, 1000);
    }
};

//mutations
const mutations = {
    setBreed(state, breed){
        state.breed = breed;
    },
    setFullBreedList(state, list){
        state.fullBreedList = list;
    },
    setBreedList(state, list){
        state.breedList = list;
    },
    setChunk(state, val){
        state.currentChunk = val;
    },
    addNextChunk(state){
        state.breedList = state.fullBreedList.slice(0, Math.min(state.currentChunk * 20, state.fullBreedList.length));
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}