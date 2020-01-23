<template>
    <div class = "app-header">
        <div class = "container app-header-container">
            <h1 class = "app-header-title" @click = "$router.push('/')">ПЁСЕЛЬ</h1>
            <div class = "app-header-favorite"
                 :class = "{active: ($router.currentRoute.path === 'favorite') }"
                @click = "$router.push('/favorite')"
            >
                <p>избранные пёсели</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
    }
</script>

<style>
    .app-header{
        background: var(--black1);
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
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
    }
    .app-header-favorite>p:after{
        content: "\f08a";

        display: inline-block;

        margin-left: 10px;

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