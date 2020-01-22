"use strict";

import dogList from "./testList";

//state
const state = {


    dogsList:[],
};

//getters
const getters = {

};

//actions
const actions = {



    addDogList(state){


        state.commit('addDogList', dogList());


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