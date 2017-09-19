// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';



Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VeeValidate);
//Vue.use(VueForm, options);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

new Vue({
  el: '#demo',
});

module.exports = {
  data: function () {
    return {
      email: ''
    };
  },
  methods: {
    submit: function () {
      this.$validate()
        .then(function (success) {
          if (success) {
            alert('Validation succeeded!');
          }
        });
    }
  }
}
