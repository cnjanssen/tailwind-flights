import Vue from 'vue';
import App from './app.vue';

import './index.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount(`#app`);