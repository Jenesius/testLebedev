"use strict";

import dogsApi from "../../assets/js/dogsApi";

//state
const state = {
    dogsList:{},
    fullDogsList:{},

    currentChunk: 0,
    isRandom: true,
};

//getters
const getters = {
    listNameBreed(state){
        let _tmp = {};



        state.dogsList.forEach(elem => {
            let title = elem[0];

            if (!_tmp.hasOwnProperty(title)){
                _tmp[title] = [];
            }
            _tmp[title].push(elem);
        });

        return _tmp;
    },
    customDogsList(state){

        try{
            if (!state.isRandom){
                let _tmp = state.dogsList.slice();

                return  _tmp.sort();
            }

        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.log('Sort problems');
        }
        return state.dogsList;
    }
};

//actions
const actions = {
    // eslint-disable-next-line no-unused-vars
    addDogList({dispatch, commit, state}) {

        commit('setChunk', 0);

        dogsApi.getListDogs()
            .then(result => {
                result.sort(() => Math.random() - 0.5 );
                commit('setFullDogList', result);
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
    updateRandom(state){
      state.isRandom = !state.isRandom;
    },
    addDogList(state, _list){
        state.dogsList = _list;
    },
    setFullDogList(state, _list){
        state.fullDogsList = _list;
    },
    setChunk(state, val){
        state.currentChunk = val;
    },
    addNextChunk(state){
        state.dogsList = state.fullDogsList.slice(0, Math.min(state.currentChunk * 20, state.fullDogsList.length));
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}