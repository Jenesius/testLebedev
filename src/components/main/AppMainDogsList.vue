<template>
    <div class = "dog-list"
        v-on:scroll="scroll"
    >
        <app-dog-list-elem
                v-for="(elem, index) in dogsList"
                :key = "index"
                :name = "elem"
        />
        <app-preloader></app-preloader>
    </div>
</template>

<script>
    import AppDogListElem from "./dogList/AppDogListElem";
    import store from "../../store";
    import AppPreloader from "../AppPreloader";

    export default {
        computed:{
            dogsList() {
                return this.$store.state.dogs.dogsList;
            }
        },
        methods:{
            scroll() {
                window.onscroll = () => {
                    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

                    if (bottomOfWindow) {

                        store.dispatch('dogs/addList');

                    }
                }
            }
        },
        mounted() {
            this.scroll();
        },
        name: "AppMainDogsList",
        components: {AppDogListElem, AppPreloader},
    }
</script>

<style>
.dog-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
</style>