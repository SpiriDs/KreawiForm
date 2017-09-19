<template>
<div class="protokoll">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
<div >
  <p>{{ msg }}</p>
  <form class="container" id="needs-validation" novalidate>

    <div class="row">
      <div class="from-group col-md-6 mb-3">
        <label for="time">Prüfungsdatum</label>
        <span class="asteriskField">
          *
        </span>
        <input type="date" class="form-control" id="time" placeholder="Prüfungsdatum" required>
        <div class="invalid-feedback">
          Bitte gebe das Prüfungsdatum an.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="prüfer">Prüfer</label>
        <input type="text" class="form-control" id="prüfer" placeholder="Prüfer">
      </div>

    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="beisitzer">Beisitzer</label>
        <input type="text" class="form-control" id="beisitzer" placeholder="Beisitzer">
      </div>

      <div class="form-group col-md-6 mb-3">
    <label for="prüfungsort">Prüfungsort</label>
    <span class="asteriskField">
      *
    </span>
    <select class="form-control" id="prüfungsort" required>
      <option v-for="standort in standorte">{{standort.name}}</option>
    </select>

    <div>
      <button>Prüfungsort nicht dabei? Bitte hier klicken</button>


    </div>

    <div class="invalid-feedback">
      Bitte gebe den Prüfungsort an.
    </div>
  </div>
</div>

    <div class="row">

      <div class="form-group col-md-6 mb-3" :class="{'has-error' : errors.has('prüfungsfragen')}">
          <label for="prüfungsfragen">Prüfungsfragen</label>
          <span class="asteriskField">
            *
          </span>
          <textarea class="form-control" id="prüfungsfragen" rows="10" required></textarea>
          <div class="invalid-feedback">
            Bitte geben Sie die Prüfungsfragen an.
          </div>
        </div>
        <div class="form-group col-md-6 mb-3">
            <label for="persönlicheEindrücke">Persönliche Eindrücke</label>
            <span class="asteriskField">
              *
            </span>
            <textarea class="form-control" id="persönlicheEindrücke" rows="10" required></textarea>
            <div class="invalid-feedback">
              Bitte geben Sie die persönlichen Eindrücke an.
            </div>
        </div>

    </div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </form>


</div>

</div>
</template>

<script>

var newPlace = {
  el: '#newPlace',
  data: {
    newPlace: '',
  }
}

export default {
  name: 'protokoll',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
  }

},

  methods: {
      toggleExamLocation() {
        this.show = !this.show;
      },
    },

}
</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("needs-validation");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());
</script>
