<template>
    <div class = "app-header">
        <div class = "container app-header-container">
            <h1 class = "app-header-title"
                @click = "openHome"
            >ПЁСЕЛЬ</h1>
            <div class = "app-header-favorite"
                 :class = "{active: ($router.currentRoute.path === 'favorite') }"
                @click = "openFavorite"
            >
                <p>избранные пёсели</p>
            </div>
        </div>

    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: "AppHeader",
        methods:{
            openFavorite: function(){
                router.push('/favorite');
            },
            openHome: function () {
                router.push('/');
            }
        },
    }
</script>

<style>
    .app-header{
        background: #151419;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.55);
    }
    .app-header-container{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        height:100px;
    }
    .app-header>.active{
        color:var(--white1);
    }
    .app-header-title{

        color:var(--main);
        font-size: 27px;
        font-weight: 300;
    }
    .app-header-favorite{
        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--gray1);
    }
    .app-header-favorite>p{
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */

        letter-spacing: 0.01em;

    }
    .app-header-favorite>p:after{
        margin-left: 10px;
        content: "\f08a";
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .app-header-favorite>img{
        margin-left: 10px;
    }
</style>