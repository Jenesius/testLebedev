<template>
    <div class = "app-main">
        <app-main-sort-bar/>
        <app-main-dogs-list/>
    </div>
</template>

<script>
    import AppMainSortBar from "./AppMainSortBar";
    import AppMainDogsList from "./AppMainDogsList";
    export default {
        name: "AppMain",
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