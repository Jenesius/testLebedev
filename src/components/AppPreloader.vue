<template>
    <div class = "app-preload">

        <span class = "round s1"></span>
        <span class = "round s2"></span>
        <span class = "round s3"></span>
    </div>
</template>

<script>
    export default {
        name: "AppPreloader"
    }
</script>

<style scoped>
    .app-preload{
        display: flex;

        justify-content: center;

        width: 100%;
        height: 60px;
    }

    @keyframes freez {
        from {
            transform: translateY(-9px);
        }
        to {
            transform: translateY(9px);
        }
    }

    .round{
        margin: 3px;
        height: 12px;
        width: 12px;
        border-radius: 50%;

        border:1px solid var(--white1);

        animation-name: freez;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    .s2{
        animation-delay: 0.3s;
    }
    .s3{
        animation-delay: 0.6s;
    }
</style>