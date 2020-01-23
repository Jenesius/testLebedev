<template>
    <img class="button-scroll-up" src = "../assets/img/ico/buttonUp.svg"
         @click = "scrollTop"
         v-show = "positionScroll > 5"
    >
</template>

<script>
    export default {
        name: "AppButtonApp",
        data: function () {
            return {
                positionScroll:window.pageYOffset
            }
        },
        methods:{
            scrollTop (){
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
             },
            checkScroll (){

                this.positionScroll = window.pageYOffset;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.checkScroll);
        }
    }
</script>

<style scoped>

@keyframes freez {
    from {
        transform: translateY(-9px);
    }
    to {
        transform: translateY(9px);
    }
}

.button-scroll-up{
    cursor: pointer;

    font-size: 50px;
    color:white;

    position: fixed;
    right: 58px;
    bottom: 53px;

    animation-name: freez;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
</style>