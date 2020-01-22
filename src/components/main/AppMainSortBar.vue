<template>
    <div class = "sort-bar">
        <div class = "sort-bar-panel">
            <p class = "sort-bar-panel-title"
                @click = "fadeBreedSorList"
                :class = "{active: isActive}"
            >Породы</p>
            <div class = "sort-bar-toggle">
                <p>Сортировать по породе</p>
                <app-toggle/>
            </div>
        </div>
        <div class = "sort-bar-list-dogs"
            v-if = "isActive"
        >
            <app-sort-list-elem
                    v-for="(elem, index) in listNameBreed"
                    :key="index"
                    :elem = "elem"
            />
        </div>
    </div>
</template>

<script>
    import AppToggle from "../AppToggle";

    import {mapGetters} from 'vuex';
    import AppSortListElem from "./sortList/AppSortListElem";

    export default {
        name: "AppMainSortBar",
        computed:{
            ...mapGetters({
                listNameBreed: "dogs/listNameBreed",
            }),
        },
        data: function(){
            return {
                isActive: Boolean,
            }
        },
        methods:{
            fadeBreedSorList: function(){
                this.isActive = !this.isActive;
            }
        },
        components: {AppSortListElem, AppToggle}
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
    .sort-bar-panel>.active:after{
        content: '\2602';
    }
    .sort-bar-panel-title{
        color:var(--white1);
        border-bottom: 1px dashed #FFFFFF;
    }
    .sort-bar-panel-title:after{
        content: '\2603';
    }
    .sort-bar-toggle{
        display: flex;
        flex-flow: row nowrap;

        align-items: center;

        color:var(--gray1);

    }
    .sort-bar-toggle>p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */

        letter-spacing: 0.01em;

        margin-right: 15px;
    }
    .sort-bar-list-dogs{
        display: flex;
        flex-flow: row wrap;
    }
</style>