<template>
<div class="memprot">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <div>
    <form @submit.prevent="validateBeforeSubmit()" class="container" novalidate>
      <div class="section-header">
        <h1>Neues Gedächtnisprotokoll einreichen</h1>
        <p>Bitte füllen Sie folgendes Formular aus. Die Felder Prüfer und Beisitzer sind optional. Vielen Dank für Ihre Mithilfe!</p>
      </div>

      <!--button @click="changeLocale" type="button" class="button is-primary">Change Locale To {{ nextLocale }}</button-->
      <br>
      <div class="row">
        <div class="from-group col-md-6 mb-3">
          <label for="datum">Prüfungsdatum</label>
          <span class="asteriskField">*</span>
          <input name="datum" v-validate="'required'" data-vv-as="Prüfungsdatum" type="date" class="form-control" id="time" placeholder="Prüfungsdatum">
          <div class="help-block alert alert-danger" v-show="errors.has('datum')">
            {{ errors.first('datum')}}
          </div>
        </div>
        <div class="form-group col-md-6 mb-3">
          <label for="tester">Prüfer</label>
          <input name="tester" v-validate="'required'" data-vv-as="Prüfer" type="text" class="form-control" id="tester" placeholder="Prüfer"/>
        </div>
        <hr>
      </div>
      <div class="row">
        <div class="form-group col-md-6 mb-3 ">
          <label class="control-label " for="text1">Beisitzer</label>
          <input class="form-control" id="assessor" name="assesor" placeholder="Beisitzer" type="text" />
        </div>
        <div class="form-group col-md-6 mb-3 ">
          <label for="prüfungsort">Prüfungsort</label>
          <span class="asteriskField">*</span>
          <select class="form-control" name="prüfungsort" id="prüfungsort" v-validate="'required'" data-vv-as="Prüfungsort" data-vv-delay="500">
            <option v-for="standort in standorte">{{standort.name}}</option>
          </select>
          <div v-if="!show" class="help-block alert alert-danger" v-show="errors.has('prüfungsort')">
            {{ errors.first('prüfungsort')}}
          </div>
          <div>
            <button @click.prevent="toggleExamLocation()">Prüfungsort nicht dabei? Bitte hier klicken</button>
          </div>
          <br/>
          <div v-if="show" class="form-group">
            <label for="newPlace">Anderen Prüfungsort angeben</label>
            <input class="form-control" v-model="newPlace" id="newplace" name="newplace" v-validate="'required'" data-vv-as="Der andere Prüfungsort" placeholder="Anderer Prüfungsort" type="text" autofocus/>
            <div class="help-block alert alert-danger" v-show="errors.has('newplace')">
              {{ errors.first('newplace')}}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6 mb-3" :class="{'has-error' : errors.has('prüfungsfragen')}">
          <label class="control-label requiredField" for="message">Prüfungsfragen</label>
          <span class="asteriskField">*</span>
          <textarea name="prüfungsfragen" v-validate="'required'" data-vv-as="Prüfungsfragen" class="form-control" cols="40" id="message" placeholder="Prüfungsfragen" rows="10"></textarea>
          <div class="help-block alert alert-danger" v-show="errors.has('prüfungsfragen')">
            {{ errors.first('prüfungsfragen')}}
          </div>
        </div>
        <div class="form-group col-md-6 mb-3">
          <label class="control-label requiredField" for="impressions">Persönliche Eindrücke</label>
          <span class="asteriskField">*</span>
          <textarea name="impressions" v-validate="'required'" data-vv-as="Persönliche Eindrücke" class="form-control" cols="40" id="impressions" placeholder="Persönliche Eindrücke" rows="10"></textarea>
          <div class="help-block alert alert-danger" v-show="errors.has('impressions')">
            {{ errors.first('impressions')}}
          </div>
        </div>
      </div>
      <div class="form-group">
        <p>Mit * markierte Felder sind Pflichtfelder.</p>
      </div>

      <div class="form-group">
        <div>
          <button class="btn btn-primary " name="submit" type="submit">Absenden</button>
        </div>
      </div>
    </form>

  </div>
</div>
</template>

<script>
//TODO: DatePicker ggf. lösha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1

var state = {
  date1: new Date()
}

var newPlace = {
  el: '#newPlace',
  data: {
    newPlace: '',
  }
}

import {Validator} from 'vee-validate';
import ar from 'vee-validate/dist/locale/ar';
import de from 'vee-validate/dist/locale/de';
import es from 'vee-validate/dist/locale/es';
import ru from 'vee-validate/dist/locale/ru';

export default {
  name: 'memprot',
  data: () => ({
    //VeeValidate data
    locale: 'de',


    //SelectPrüfungsorte
    standorte: [
      {
        name: '',
      },
      {
        name: 'Ansbach',
      },
      {
        name: 'Aschersleben',
      },
      {
        name: 'Augsburg',
      }
    ],

    //Neuer Prüfungsort

    show: false, //Einblenden des Feldes

    newPlace: '',

    /*
    addPlace: () => {
      this.standorte.push({
        name: this.newPlace.name,
      });


    },*/










  }),

  /*computed: {
    locale(){
      this.$validator.setLocale('de');
      return this.locale === 'en' ? 'De' : 'English';
    }
  },*/
  methods: {

    toggleExamLocation() {
      this.show = !this.show;

    },


    addPlace: (e) => {
      this.standorte.push({
        name: this.newPlace.name,
      });
      e.preventDefault();

    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('From Submitted!');
          return;
        }

        alert('Pflichtfelder bitte ausfüllen!');
      });
    },
  },

  created() {
    this.$validator.setLocale('de');
    this.$validator.updateDictionary({
      de: {
        messages: de.messages,
        attributes: {
          email: 'البريد الاليكتروني',
          phone: 'رقم الهاتف'
        }
      }
    });
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  margin: 40px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}










/*.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}*/
</style>
