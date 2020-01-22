<template>
  <div id="app">
    <app-header/>
  </div>
</template>

<script>


import AppHeader from "./components/AppHeader";
export default {
  name: 'app',
  components: {
    AppHeader

  }
}
</script>

<style>
    @import "assets/css/app.css";

    #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
</style>
