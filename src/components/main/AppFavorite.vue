<template>
    <div class = "app-favorite-breed">
        <app-dog-list-elem
                v-for="(elem) in favoriteArray"
                :key = "elem.url"

                :url = "elem.url"
                :name = "elem.name"
        />
    </div>
</template>

<script>
    import AppDogListElem from "./dogList/AppDogListElem";

    export default {
        name: "AppFavorite",
        computed:{
            favoriteArray(){
                return this.$store.state.favorite.favoriteArray;
            }
        },
        methods: {

        },
        components: {AppDogListElem},

    }
</script>

<style scoped>
.app-favorite-breed{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    padding-top: 116px;
}
</style>