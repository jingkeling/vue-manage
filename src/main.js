// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ws from './components/ws/index';
import axios from 'axios';
import store from './store';

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.use(ws);
Vue.use(iView);


new Vue({
  el: '#app',
  router,
  store,
  // render:h => h(App)
  components: {myapp: App},
  template: '<myapp/>'
});
