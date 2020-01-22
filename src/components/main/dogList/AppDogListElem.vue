<template>
    <div class = "dog-list-elem" :style = "backgroud">
        <i class="fa " aria-hidden="true"
           :class="activeIco"
           @click = "updateFavorite({name:elem, url: urlAvatar})"
        />
        <!--<img :src = "urlAvatar" alt = "dog avatar" class = "dog-avatar">-->
        <p class = "dog-name">{{ elem }}</p>
    </div>
</template>

<script>
    import dogsApi from "../../../assets/js/dogsApi";

    import {mapMutations} from 'vuex'
    export default {
        props:{
          elem: String,
          isActive: Boolean,
        },
        data: function(){
            return {
                urlAvatar: String,
            }
        },
        methods:{
            ...mapMutations({
                updateFavorite: 'favorite/update'
            }),

        },
        computed:{
            activeIco: function(){
                if(this.isActive){
                    return 'fa-heart';
                } else {
                    return 'fa-heart-o';
                }
            },
            backgroud: function(){
                return `background: url(${this.urlAvatar}) no-repeat center/cover`;
            }
        },
        name: "AppDogListElem",
        mounted() {

            this.urlAvatar = dogsApi.getRandomAvatarBreed(this.elem);
        }
    }
</script>

<style>
    .dog-list-elem{
        position: relative;

        margin: 0 10px 30px 10px;

        height: 290px;
        width: 367px;

        border-radius: 8px;
    }
    .dog-list-elem>i{
        position: absolute;
        left: 25px;
        top: 25px;


        color:white;
        font-size: 29px;
    }
    .dog-name{
        position: absolute;
        right: 25px;
        bottom: 25px;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 28px;
        /* identical to box height, or 112% */

        letter-spacing: 0.01em;

        color: var(--white1);
    }
</style>