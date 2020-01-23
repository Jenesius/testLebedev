<template>
    <div class = "dog-list">
        <app-dog-list-elem
                v-for="(elem, index) in dogsList"
                :key = "index"
                :name = "index"
        />
    </div>
</template>

<script>
    import AppDogListElem from "./dogList/AppDogListElem";

    export default {
        computed:{
            dogsList() {
                return this.$store.state.dogs.dogsList;
            }
        },
        name: "AppMainDogsList",
        components: {AppDogListElem},
    }
</script>

<style>
.dog-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
</style>