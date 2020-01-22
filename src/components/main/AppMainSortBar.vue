<template>
    <div class = "sort-bar">
        <div class = "sort-bar-panel">
            <p class = "sort-bar-panel-title">Породы</p>
            <div class = "sort-bar-toggle">
                <p>Сортировать по породе</p>
                <app-toggle/>
            </div>
        </div>
        <div class = "sort-bar-list-dogs"></div>
    </div>
</template>

<script>
    import AppToggle from "../AppToggle";
    export default {
        name: "AppMainSortBar",
        components: {AppToggle}
    }
</script>

<style>
    .sort-bar{
        padding:44px 0;
    }
.sort-bar-panel{
    display: flex;
    justify-content: space-between;
}
    .sort-bar-panel-title{
        color:var(--white1);
    }
    .sort-bar-toggle{
        display: flex;
        flex-flow: row nowrap;

        align-items: center;

        color:var(--gray1);

    }
    .sort-bar-toggle>p{
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */

        letter-spacing: 0.01em;

        margin-right: 15px;
    }
</style>