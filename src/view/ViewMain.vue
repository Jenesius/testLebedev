<template>
    <div class = "container">
        <app-sort-bar
                v-show ="$router.currentRoute.path !== '/favorite'"
        />

        <router-view name="main"/>
    </div>
</template>

<script>

    import AppSortBar from "../components/appSortBar/AppSortBar";

    export default {
        name: "ViewMain",
        components: {AppSortBar}
    }
</script>

<style>

</style>