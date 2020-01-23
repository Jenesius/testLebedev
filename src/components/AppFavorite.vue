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
  import {mapState} from 'vuex';
  import AppDogListElem from "./main/dogList/AppDogListElem";

    export default {
        name: "AppFavorite",
        computed:{
            ...mapState({
                favoriteArray(state){
                    return state.favorite.favoriteArray;
                }
            })
        },
        components: {AppDogListElem},
    }
</script>

<style scoped>
.app-favorite-breed{
    display: flex;
    flex-flow: row wrap;
}
</style>