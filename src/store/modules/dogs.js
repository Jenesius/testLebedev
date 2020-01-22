"use strict";

import dogsApi from "../../assets/js/dogsApi";

//state
const state = {


    dogsList:{},
};

//getters
const getters = {
    listNameBreed(state){
        // eslint-disable-next-line no-unused-vars
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



    /*Check status - Success*/
    addDogList(state){

        // eslint-disable-next-line no-console
        console.log(dogsApi.listDogs);
        state.commit('addDogList',dogsApi.listDogs.message );


       /*const url = "https://dog.ceo/api/breeds/list/all";
       return fetch(url, {
           method: 'GET',
           headers: {
               'Access-Control-Allow-Origin':'*',
               'Content-Type': 'application/json'
           },
           mode: 'cors',
       })
           .then(response => response.json())
           .then(result => {
               // eslint-disable-next-line no-console
               console.log(result);
           })
           .catch(err => {
               // eslint-disable-next-line no-console
               console.log(err);
           })*/
    }
};

//mutations
const mutations = {

    addDogList(state, _list){

        // eslint-disable-next-line no-console


        state.dogsList = _list;

        // eslint-disable-next-line no-console
        console.log(state.dogsList);
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}