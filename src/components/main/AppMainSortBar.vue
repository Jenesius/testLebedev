<template>
    <div class = "sort-bar"

    >
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
    import AppToggle from "../AppToggle";

    import {mapGetters, mapState} from 'vuex';
    import AppSortListElem from "./sortList/AppSortListElem";

    export default {
        name: "AppMainSortBar",
        computed:{
            ...mapGetters({
                listNameBreed: "dogs/listNameBreed",
            }),
            ...mapState({
                title: function(){
                    return this.$store.state.breed.breed;
                }
            }),
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
        color:var(--white1);

        border-bottom: 1px dashed #FFFFFF;
    }
    .sort-bar-panel-title-button:after{
        margin-left: 5px;

        content: "\f107";
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
    }
    .sort-bar-panel .active:after{ content: "\f106"; }
    .sort-bar-panel-title-current{

        margin-left: 21px;

        display: flex;
        align-items: center;
        justify-content: center;

        color:var(--main);
        padding: 4px 12px;
        font-size: 12px;
        line-height: 16px;

        cursor: pointer;

        letter-spacing: 0.01em;

        border: 1px solid #3C59F0;
        border-radius: 20px;
    }
    .sort-bar-panel-title-current:after{
        margin-left: 5px;

        content: "\f00d";
        display: inline-block;
        font: normal normal normal 11px/1 FontAwesome;
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
        padding-top: 17px;
    }
</style>