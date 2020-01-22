<template>
    <div class = "dog-list">
        <app-dog-list-elem
                v-for="(elem, index) in dogsList"
                :key = "index"
                :elem = "index"
        />
    </div>
</template>

<script>
    import AppDogListElem from "./main/dogList/AppDogListElem";

    import {mapState} from "vuex";
    export default {
        name: "AppBreedList",

        computed: {
            ...mapState({
                dogsList() {
                    return this.$store.state.dogs.dogsList;
                }
            }),
        },
        components: {AppDogListElem},
    }
</script>

<style scoped>

</style>