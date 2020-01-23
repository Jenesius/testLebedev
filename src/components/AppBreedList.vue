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
    import AppDogListElem from "./main/dogList/AppDogListElem";

    import {mapState, mapActions, mapMutations} from "vuex";

    import store from '../store'

    export default {
        name: "AppBreedList",

        computed: {
            ...mapState({
                dogsList() {
                    return this.$store.state.breed.breedList;
                }
            }),
        },
        methods:{
          ...mapActions({
              updateBreedList: 'breed/updateList',
          }),
            ...mapMutations({
                setBreed: 'breed/setBreed',
            })
        },
        beforeRouteEnter (to, from, next) {

            store.dispatch('breed/updateList', to.params.bear);

            next();
        },
        beforeRouteUpdate (to, from, next) {
            this.updateBreedList(to.params.bear);
            next();
        },
        beforeRouteLeave(to, from, next) {
          this.setBreed('');
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