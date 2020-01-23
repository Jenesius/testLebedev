"use strict";

import dogsApi from "../../assets/js/dogsApi";

//state
const state = {
    dogsList:{},
};

//getters
const getters = {
    listNameBreed(state){
        let _tmp = {};

        for(let key in state.dogsList){

            let title = key[0];

            if (!_tmp.hasOwnProperty(title)){
                _tmp[title] = [];
            }
            _tmp[title].push(key);
        }
        return _tmp;
    }
};

//actions
const actions = {
    addDogList(state) {
        dogsApi.getListDogs()
            .then(result => {
                state.commit('addDogList', result);
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err);
            })
    }
};

//mutations
const mutations = {
    addDogList(state, _list){
        state.dogsList = _list;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}