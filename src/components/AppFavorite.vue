<template>
    <div class = "app-favorite-breed">
        <app-dog-list-elem
                v-for="(elem, index) in favoriteArray"
                :key = "index"
                :elem = "index"
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
        mounted() {
            // eslint-disable-next-line no-console
            console.log(this.favoriteArray);
        },
        components: {AppDogListElem},
    }
</script>

<style scoped>

</style>