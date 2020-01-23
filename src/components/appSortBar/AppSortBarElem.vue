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
                title: this.elem[0][0]
            };
        },
        name: "AppSortListElem",
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
    margin: 0 10px 10px 0;

    color:var(--gray1);
}
.sort-list-elem-breed{
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #626262;
    padding: 4px 12px;

    text-decoration: none;

    font-size: 12px;
    line-height: 16px;

    border-radius: 20px;
}
.sort-list-elem-breed>a{
    text-decoration: none;
    color:var(--gray1);

    transition: .2s;
}
.sort-list-elem-breed>a:hover{
    color:#b4a8b3;
}
.sort-list-elem-title{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #626262;

    text-transform: uppercase;
}
</style>