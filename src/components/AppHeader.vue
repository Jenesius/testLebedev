<template>
    <div class = "app-header">
        <h1 class = "app-header-title">ПЁСЕЛЬ</h1>
        <div class = "app-header-favorite" :class = "{active: true}">
            <p>избранные пёсели</p>
            <img src = "#" alt = "image-favorite-dogs">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style>
    .app-header{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        height:100px;

        padding: 0 60px;

        background: #151419;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.55);
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
    .app-header-favorite>img{
        margin-left: 10px;
    }
</style>