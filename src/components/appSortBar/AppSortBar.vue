<template>
    <div class = "sort-bar">
        <div class = "sort-bar-panel">
            <div class = "sort-bar-panel-title">
                <p class = "sort-bar-panel-title-button"
                    @click = "fadeBreedSorList"
                    :class = "{active: isActive}"
                >Породы</p>
                <p class = "sort-bar-panel-title-current"
                    @click = "$router.push('/')"
                    v-if = "title"
                >{{ title }}</p>
            </div>
            <div class = "sort-bar-toggle">
                <p>Сортировать по породе</p>
                <app-toggle/>
            </div>
        </div>
        <div class = "sort-bar-list-dogs" v-if = "isActive">
            <app-sort-list-elem
                v-for="(elem, index) in listNameBreed"
                :key="index"
                :elem = "elem"
            />
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import AppToggle from "../AppToggle";
    import AppSortListElem from "./AppSortBarElem";

    export default {
        name: "AppMainSortBar",
        computed:{
            ...mapGetters({
                listNameBreed: "dogs/listNameBreed",
            }),
            title: function(){
                return this.$store.state.breed.breed;
            }
        },
        data: function(){
            return {
                isActive: false,
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
    .sort-bar-panel-title{
        display: flex;
        flex-flow: row nowrap;
    }
    .sort-bar-panel-title-button{
        border-bottom: 1px dashed #FFFFFF;

        color:var(--white1);
    }
    .sort-bar-panel-title-button:after{
        content: "\f107";

        display: inline-block;

        margin-left: 5px;

        font: normal normal normal 14px/1 FontAwesome;
    }
    .sort-bar-panel .active:after{ content: "\f106"; }
    .sort-bar-panel-title-current{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 21px;
        border: 1px solid #3C59F0;
        padding: 4px 12px;

        color:var(--main);
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.01em;

        cursor: pointer;

        border-radius: 20px;
    }
    .sort-bar-panel-title-current:after{
        content: "\f00d";

        display: inline-block;

        margin-left: 5px;

        font: normal normal normal 11px/1 FontAwesome;
    }
    .sort-bar-toggle{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        color:var(--gray1);
    }
    .sort-bar-toggle>p{
        margin-right: 15px;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
    }
    .sort-bar-list-dogs{
        display: flex;
        flex-flow: row wrap;

        padding-top: 17px;
    }
</style>