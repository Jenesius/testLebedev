<template>
    <div class = "dog-list-elem">
        <img :src = "dogUrl" alt = "dog avatar" class = "dog-avatar">
        <p class = "dog-name">{{ dogName }}</p>
    </div>
</template>

<script>
    export default {
        props:{
          elem:{
              dogUrl:"",
              dogName:"",

              isLiked:false,
          }
        },
        name: "AppDogListElem"
    }
</script>

<style>
    .dog-list-elem{
        position: relative;

        margin-top: 30px;

        height: 290px;
        width: 367px;

        border-radius: 8px;
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