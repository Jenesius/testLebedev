<template>
    <div class = "dog-list-elem" :style = "background">
        <i class="fa " aria-hidden="true"
           :class="activeIco"
           @click = "updateFavorite({name:name, url: urlAvatar})"
        />
        <p class = "dog-name">{{ name }}</p>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import dogsApi from "../../../assets/js/dogsApi";

    export default {
        props:{
            name: String,
            url: String,
        },
        data: function(){
            return {
                urlAvatar: this.url,
                isFavorite: false,
            }
        },
        methods:{
            ...mapMutations({
                updateFavorite: 'favorite/update',
            }),
        },
        computed:{
            activeIco: function(){
                let _tmp =this.$store.state.favorite.favoriteArray.findIndex(elem => elem.url === this.urlAvatar);

                if(_tmp !== -1){
                    return 'fa-heart';
                } else {
                    return 'fa-heart-o';
                }
            },
            background: function(){
                return `background: url(${this.urlAvatar}) no-repeat center/cover`;
            }
        },
        async mounted() {
            if (this.urlAvatar === undefined){
                this.urlAvatar = await dogsApi.getRandomAvatarBreed(this.name);
            }
        },
        name: "AppDogListElem",
    }
</script>

<style>
    .dog-list-elem{
        position: relative;


        margin-top: 30px;
        width: calc( 100% / var(--count-dogs-list-elems)  - 23px);
        height: 290px;


        border-radius: 8px;
    }
    @media screen and (max-width: 920px) {
        .dog-list-elem{
            width: 100%;
        }
    }
    .dog-list-elem>i{
        position: absolute;
        left: 25px;
        top: 25px;

        color:var(--white1);
        font-size: 29px;
    }
    .dog-name{
        position: absolute;
        right: 25px;
        bottom: 25px;

        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 28px;

        color: var(--white1);
    }
    .dog-name:first-letter {
        text-transform:capitalize;
    }
</style>