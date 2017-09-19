<template>
  <div class="container" id="app">
    <Memprot></Memprot>
    <hr/>
    <!--Protokoll></Protokoll-->
    <!--Test></Test-->
  </div>
</template>


<script>

import Memprot from './components/Memprot'
import VeeValidate from 'vee-validate'
//import Protokoll from './components/Protokoll'
//import Test from './components/Test'



/*Vue.component('my-component', {
  components: {
    Datepicker
}
})*/

export default {
  name: 'app',
  components: {
    Memprot,
    //Protokoll,
    //Test,
  },

  data :() => ({


      locale: 'de'


  }),
}
</script>

<style>
#app {

}


</style>
