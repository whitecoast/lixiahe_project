import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
// import VueRouter from 'vue-router'
// import router from './router/index'
// import echarts from 'echarts'

Vue.use(ElementUI);
// Vue.use(VueRouter);

// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false,
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this;
  },
  // router:router
}).$mount('#app')
