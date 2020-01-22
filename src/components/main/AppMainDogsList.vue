<template>
    <div class = "dog-list">
        <app-dog-list-elem></app-dog-list-elem>
        <app-dog-list-elem></app-dog-list-elem>
        <app-dog-list-elem></app-dog-list-elem>
        <app-dog-list-elem></app-dog-list-elem>
        <app-dog-list-elem></app-dog-list-elem>
        <app-dog-list-elem></app-dog-list-elem>
    </div>
</template>

<script>
    import AppDogListElem from "./dogList/AppDogListElem";
    export default {
        name: "AppMainDogsList",
        components: {AppDogListElem}
    }
</script>

<style>
.dog-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
</style>