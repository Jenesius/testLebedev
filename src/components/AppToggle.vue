<template>
    <label class="switch" >
        <input type="checkbox" @change="updateRandom">
        <span class="slider round"/>
    </label>
</template>

<script>
    export default {
        name: "AppToggle",
        methods: {
            updateRandom(){
                this.$store.commit('dogs/updateRandom');
            }
        }
    }
</script>

<style scoped>
    .switch {
        display: inline-block;

        position: relative;

        width: 29px;
        height: 17px;
    }
    .switch input {
        width: 0;
        height: 0;

        opacity: 0;
    }
    .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        border: 2px solid var(--gray1);

        cursor: pointer;

        -webkit-transition:.4s;
        transition: .4s;
    }
    .slider:before {
        content: "";

        position: absolute;
        left: 3px;
        bottom: 2px;

        height: 9px;
        width: 9px;

        background-color: var(--gray1);

        -webkit-transition: .4s;
        transition: .4s;
    }
    input:checked + .slider {
        border: 2px solid var(--white1);
        background-color: var(--main);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--main);
    }
    input:checked + .slider:before {
        background-color: var(--white1);
        -webkit-transform: translateX(11px);
        -ms-transform: translateX(11px);
        transform: translateX(11px);
    }
    .slider.round {
        border-radius: 34px;
    }
    .slider.round:before {
        border-radius: 50%;
    }
</style>