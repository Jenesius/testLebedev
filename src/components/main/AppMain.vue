<template>
    <div class = "app-main">
        <app-main-sort-bar
                v-show ="$router.currentRoute.path !== '/favorite'"
        />

        <router-view name="main"/>

    </div>
</template>

<script>
    import AppMainSortBar from "./AppMainSortBar";
    import AppMainDogsList from "./AppMainDogsList";
    export default {
        name: "AppMain",
        // eslint-disable-next-line vue/no-unused-components
        components: {AppMainDogsList, AppMainSortBar}
    }
</script>

<style >
.app-main{
    display: flex;
    flex-flow: column nowrap;

    min-height: 100%;
}
</style>