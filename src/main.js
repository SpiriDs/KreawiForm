// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VeeValidate, { Validator } from 'vee-validate';
import de from 'vee-validate/dist/locale/de';
import ar from 'vee-validate/dist/locale/ar';
import es from 'vee-validate/dist/locale/es';
import ru from 'vee-validate/dist/locale/ru';

Vue.config.productionTip = false;

Vue.use(VueResource);


//Lokalisierung für Vee-Validate de ändern auf die gewünschte Sprache
Validator.addLocale(de);
Vue.use(VeeValidate, { locale: 'de' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

module.exports = {
  data: function () {
    return {
      email: '',
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
    },
  },

};
