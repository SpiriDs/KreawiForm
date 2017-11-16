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
import vSelect from 'vue-select';
//import Datepicker from 'vuejs-datepicker';
//import Datepicker from 'vue-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_blue.css';
import { Russian } from "flatpickr/dist/l10n/ru.js";
import { German } from "flatpickr/dist/l10n/de.js";

flatpickr.localize(German);

const configFlatPickr = {
  dateFormat: "d-m-Y",
}
Vue.use(flatPickr);

Vue.config.productionTip = false;

Vue.use(VueResource);


//Vue.component('datepicker', Datepicker);

//Lokalisierung für Vee-Validate de ändern auf die gewünschte Sprache
Validator.addLocale(de);

const config = {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields', 
  delay: 1000000, 
  locale: 'de', 
  dictionary: null, 
  strict: true, 
  classes: false, 
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
};

Vue.use(VeeValidate, config);



//vSelect
Vue.component('v-select', vSelect);

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
