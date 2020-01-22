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
    import AppDogListElem from "./dogList/AppDogListElem";

    import {mapState} from "vuex";

    export default {
        computed:{
            ...mapState({
                dogsList() {
                    return this.$store.state.dogs.dogsList;
                }
            }),
        },
        name: "AppMainDogsList",
        components: {AppDogListElem},
        mounted() {

            setTimeout(()=>{
                // eslint-disable-next-line no-console
                console.log(this.dogsList);
            }, 3000)


        }
    }
</script>

<style>
.dog-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
</style>