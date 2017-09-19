Vue.component('option', {
  props:['standort'],
  template: '<option value="{{standort.value}}">{{standort.name}}</option>'
})
