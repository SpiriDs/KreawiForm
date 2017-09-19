<!-- 02.09.17 13:00 Uhr   || Memprot.vue-->
<template>
<div class="memprot">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <form>
            <div class="form-group ">
              <label class="control-label requiredField" for="date">
                Date
                <span class="asteriskField">
                  *
                </span>
              </label>
              <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text" />
            </div>
            <div class="form-group ">
              <label class="control-label requiredField" for="select">
                Prüfungsort / Gesundheitsamt
                <span class="asteriskField">
                  *
                </span>
              </label>
              <select class="select form-control" id="select" name="select">
                <option v-for="standort in standorte" v-bind:value="standort.value">{{standort.name}}</option>
              </select>
              <div id="demo">
                <button v-on:click="show = !show">Prüfungsort nicht dabei? Bitte hier klicken</button>
                <br />
                <br />
                <br />


                <label v-if="show" class="control-label">Bitte gib den anderen Prüfungsort an</label>

                <div>
                  <input v-if="show" class="form-control" v-model="newPlace.name" id="newplace" name="newplace" placeholder="Anderer Prüfungsort" type="text" />
                  <input v-if="show" type="submit" value="submit" />
                </div>
              </div>
            </div>
            <div class="form-group ">
              <label class="control-label " for="tester">
                Pr&uuml;fer
              </label>
              <input class="form-control" id="tester" name="tester" placeholder="Prüfer" type="text" />
            </div>
            <div class="form-group ">
              <label class="control-label " for="text1">
                Beisitzer
              </label>
              <input class="form-control" id="text1" name="text1" placeholder="Beisitzer" type="text" />
            </div>
            <div class="form-group ">
              <label class="control-label requiredField" for="message">
                Prüfungsfragen
                <span class="asteriskField">
                  *
                </span>
              </label>
              <textarea class="form-control" cols="40" id="message" name="message" placeholder="Prüfungsfragen" rows="10"></textarea>
            </div>
            <div class="form-group ">
              <label class="control-label requiredField" for="impressions">
                Persönliche Eindrücke
                <span class="asteriskField">
                  *
                </span>
              </label>
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
export default {
  name: 'memprot',
  data() {
    return {

      newPlace: {},

      standorte: [{
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

      show: false,




    };




  },
  methods: {

    addHide: () => {
      this.addPlace;
      this.showing
    },

    addPlace: (e) => {
      this.standorte.push({
        name: this.newPlace.name,
      });
      e.preventDefault();

    },

    showing: () => {
      this.show = false;

    }



  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
