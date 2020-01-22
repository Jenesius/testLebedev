<template>
  <div id="app">
    <app-header/>

    <view-main>

    </view-main>

  </div>
</template>

<script>


import AppHeader from "./components/AppHeader";
import ViewMain from "./view/ViewMain";

import {mapActions} from 'vuex';

export default {
  name: 'app',
  components: {
    ViewMain,
    AppHeader

  },
  methods:{
    ...mapActions({
      addDogList: 'dogs/addDogList',
    })
  },
  mounted:function(){

    this.addDogList();
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
  .container{
    padding: 0 60px;
    margin: auto;
  }
  body{
    background-color: #393939;
  }
</style>
