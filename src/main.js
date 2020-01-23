import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'



Vue.config.productionTip = false

Vue.use(Vuex);

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
