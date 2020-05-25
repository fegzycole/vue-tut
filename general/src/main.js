// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.config.productionTip = false;

export const bus = new Vue();

Vue.filter('snippet', function(data) {
  return data.slice(0, 100) + '...';
})

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value=== 'wide') {
      el.style.maxWidth = '1200px';
    }
    else if (binding.value=== 'narrow') {
      el.style.maxWidth = '600px';
    }

    if (binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
