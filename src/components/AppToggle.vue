<template>
    <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
</template>

<script>
    export default {
        name: "AppToogle"
    }
</script>

<style scoped>
    .switch {
        position: relative;
        display: inline-block;
        width: 29px;
        height: 14px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        border: 2px solid rgb(175, 177, 188);

        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 9px;
        width: 9px;
        left: 3px;
        bottom: 1px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: var(--main);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--main);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(11px);
        -ms-transform: translateX(11px);
        transform: translateX(11px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>