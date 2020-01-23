<template>

        <div class = "container" >
            <app-sort-bar v-show ="$router.currentRoute.path !== '/favorite'"/>

            <router-view name="main"/>

            <app-button-scroll-up/>


        </div>

</template>

<script>

    import AppSortBar from "../components/appSortBar/AppSortBar";
    import AppButtonScrollUp from "../components/AppButtonScrollUp";


    export default {
        name: "ViewMain",
        components: { AppButtonScrollUp, AppSortBar},

    }
</script>

<style>

</style>