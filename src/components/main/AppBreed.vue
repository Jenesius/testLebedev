<template>
    <div class = "dog-bread-list">
        <app-dog-list-elem
                v-for="(elem) in dogsList"
                :key = "elem"
                :name = "$route.params.bear"
                :url = "elem"
        />
    </div>
</template>

<script>
    import AppDogListElem from "./dogList/AppDogListElem";
    import store from '../../store'

    export default {
        name: "AppBreedList",
        computed: {
            dogsList() {
                return store.state.breed.breedList;
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
        components: {AppDogListElem},
    }
</script>

<style scoped>
    .dog-bread-list{
        display: flex;
        flex-flow: row wrap;
    }
</style>