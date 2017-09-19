<template>
<div class="memprot">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <form class="container">
            <h1>Gedächtnisprotokoll</h1>
            <br>

            <!--testfeld vee-validation-->

            <div class="column is-12">
              <label class="label">Name</label>
              <input name="name"  type="text" placeholder="Name" v-validate="'required'" data-vv-as="Name">
              <div class="help-block alert alert-danger" v-show="errors.has('name')">
                {{ errors.first('name') }}
              </div>
            </div>
            <div class="form-group">
              <label class="label">* Email</label>
              <input type="email" class="form-control" name="email" id="email" v-model="email" v-validate="'required|email'" data-vv-as="E-Mail"/>
              <div class="help-block alert alert-danger" v-show="errors.has('email')">
                {{ errors.first('email')}}
              </div>
            </div>
            <br>
            <div class="formgroup" >
              <label class="label">Datum der Prüfung</label>
              <div><datepicker name ="date"  v-validate="'required'" data-vv-as="Datum der Prüfung" placeholder="Datum der Prüfung"></datepicker></div>
              <div class="help-block alert alert-danger" v-show="errors.has('date')">
                {{ errors.first('date')}}
              </div>
              <!--code>
                    &lt;datepicker placeholder="Select Date"&gt;&lt;/datepicker&gt;
                </code-->
            </div>

            <br>
            <hr>

            <div class="form-group">
              <label for="select">Prüfungsort / Gesundheitsamt</label>
              <select class="select form-control" id="select" name="prüfungsort" >
                <!--option v-if="show" id="newPlace" selected>{{newPlace}}</option-->
                <option value="">Please Select One</option>
                <option v-for="standort in standorte">{{standort.name}}</option>
              </select>
                <div class="help-block alert alert-danger" v-show="errors.has('prüfungsort')">
                  {{ errors.first('prüfungsort')}}
                </div>
              <p>{{show}}</p>
              <br />
              <div id="demo">
                <button @click.prevent="toggleExamLocation()" type="button">Prüfungsort nicht dabei? Bitte hier klicken</button>

                <div v-if="show" class="form-group">
                  <label class="control-label">Bitte gib den anderen Prüfungsort an</label>
                  <!--input class="form-control" v-model="newPlace.name" id="newplace" name="newplace" placeholder="Anderer Prüfungsort" type="text" /-->
                  <input class="form-control" v-model="newPlace" id="newplace" name="newplace" placeholder="Anderer Prüfungsort" type="text" />
                  <!--button v-on:enter.stop="show = !show" type="button" name="button">Add</button-->
                </div>
              </div>
            </div>
            <br>
            <hr>
            <div class="form-group ">
              <label class="control-label " for="tester">Prüfer</label>
              <input required name="tester" data-vv-as="Prüfer" v-validate="'required'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('tester') }" class="form-control" id="tester" placeholder="Prüfer" type="text" />
              <i v-show="errors.has('tester')" class="fa fa-warning"></i>
              <span v-show="errors.has('tester')" class="help-block alert alert-danger is-danger">{{ errors.first('tester') }}</span>
            </div>
            <div class="form-group ">
              <label class="control-label " for="text1">Beisitzer</label>
              <input class="form-control" id="assessor" name="assesor" placeholder="Beisitzer" type="text" />
            </div>
            <br>
            <hr>
            <div class="form-group ">
              <label class="control-label requiredField" for="message">Prüfungsfragen</label>
              <textarea class="form-control" cols="40" id="message" name="message" placeholder="Prüfungsfragen" rows="10"></textarea>
            </div>
            <div class="form-group ">
              <label class="control-label requiredField" for="impressions">Persönliche Eindrücke</label>
              <textarea class="form-control" cols="40" id="impressions" name="impressions" placeholder="Persönliche Eindrücke" rows="10"></textarea>
            </div>
            <div class="form-group">
              <div>
                <button class="btn btn-primary " name="submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//TODO: DatePicker ggf. lösha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1









import Datepicker from 'vuejs-datepicker';


var state = {
  date1: new Date()
}

var newPlace = {
  el: '#newPlace',
  data: {
    newPlace: '',
  }
}

export default {
  name: 'memprot',
  components: {
    Datepicker,

  },

  data: () => ({
    //SelectPrüfungsorte
    standorte: [{
        name: '',
        enail: '',
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

    show: true, //Einblenden des Feldes

    newPlace: '',

    /*
    addPlace: () => {
      this.standorte.push({
        name: this.newPlace.name,
      });


    },*/

    //Datepicker

    format: 'd MMMM yyyy',
    disabled: {},
    eventMsg: null,
    state: state,
    vModelExample: null,

    //VeeValidate data
    locale: 'de',
    tester: '',





  }),

  validators: {
    email: function(value) {
      return Validator.value(value).required().email();
    }
  },

  computed: {
    nextLocale() {
      return this.locale === 'en' ? 'German' : 'English';
    }
  },
  methods: {

    submit: function() {
      this.$validate()
        .then(function(success) {
          if (success) {
            alert('Validation succeeded!');
          }
        });
    },
    toggleExamLocation() {
      this.show = !this.show;
    },

    disableTo(val) {
      console.log(val)
      if (typeof this.disabled.to === 'undefined') {
        this.disabled = {
          to: null,
          from: this.disabled.from
        };
      }
      this.disabled.to = val;
    },
    disableFrom(val) {
      if (typeof this.disabled.from === 'undefined') {
        this.disabled = {
          to: this.disabled.to,
          from: null
        };
      }
      this.disabled.from = val;
    },
    addPlace: (e) => {
      this.standorte.push({
        name: this.newPlace.name,
      });
      e.preventDefault();

    },

  },

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
