<template>
    <div class = "sort-list-elem">
        <p class = "sort-list-elem-title">{{ title }}</p>
        <span class = "sort-list-elem-breed"
              v-for = "(breed, index) in elem"
              :key = "index"

        >
            <router-link :to = "breed">{{breed}}</router-link>
        </span>

    </div>
</template>

<script>
    export default {
        props:{
            elem:{},
        },
        data: function(){
            return {
                title: ""
            };
        },
        name: "AppSortListElem",
         mounted() {

            this.title = this.elem[0][0];

         }
    }
</script>

<style scoped>
.sort-list-elem{
    display: flex;
    flex-flow: row wrap;
    color: var(--gray1);
}
.sort-list-elem>*:last-child{
    margin-right: 25px;
}
.sort-list-elem>*{
    color:var(--gray1);
    margin-right: 10px;
    margin-bottom: 10px;
}
.sort-list-elem>span{
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;


    border: 1px solid #626262;
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 12px;
    line-height: 16px;



}
.sort-list-elem>span>a{
    text-decoration: none;
    color:var(--gray1);
}
.sort-list-elem-title{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    /* identical to box height, or 140% */

    letter-spacing: 0.01em;

    color: #626262;

    text-transform: uppercase;
}
.sort-list-elem-breed{

}
</style>