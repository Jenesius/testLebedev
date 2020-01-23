<template>
  <div id="app" >
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
    }),
    scroll: function(){
      // eslint-disable-next-line no-console
      console.log('++++');
    },
  },
  mounted:function(){

    this.addDogList();
  }
}
</script>

<style>
    @import "assets/css/app.css";
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');

    #app{
      font-family: 'IBM Plex Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      text-align: center;
      color: #2c3e50;
      min-height: 100vh;
    }
    .container{
        width: 1280px;

        margin: auto;
    }
  @media screen and (max-width: 1300px){
    .container{
      width: 800px;
    }
  }
    @media screen and (max-width: 820px){
      .container{
        padding: 0 20px;
        width: 100%;
      }
    }
  body{
    background: var(--black2);
  }
</style>
