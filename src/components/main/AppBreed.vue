<template>
    <div class = "dog-bread-list">
        <app-dog-list-elem
                v-for="(elem) in dogsList"
                :key = "elem"
                :name = "$route.params.bear"
                :url = "elem"
        />
        <app-preloader></app-preloader>
    </div>
</template>

<script>
    import AppDogListElem from "./dogList/AppDogListElem";
    import store from '../../store'
    import AppPreloader from "../AppPreloader";

    export default {
        name: "AppBreedList",
        computed: {
            dogsList() {
                return store.state.breed.breedList;
            }
        },
        methods:{
            scroll() {


                window.onscroll = () => {
                    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

                    if (bottomOfWindow) {

                        store.dispatch('breed/addList');

                    }
                }
            }
        },
        beforeRouteEnter (to, from, next) {

            store.dispatch('breed/updateList', to.params.bear);
            next();
        },
        beforeRouteUpdate (to, from, next) {
            store.dispatch('breed/updateList', to.params.bear);
            next();
        },
        beforeRouteLeave(to, from, next) {
            store.commit('breed/setBreed', '');
            next();
        },
        mounted() {
            this.scroll();
        },
        components: {AppDogListElem, AppPreloader},
    }
</script>

<style scoped>
    .dog-bread-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
</style>