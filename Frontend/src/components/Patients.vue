<template>
  <div class="hello">
    <div>
      <button @click="newPatient" class="btn btn-success">Novo Paciente</button>
    </div>
    <div class="col-md-6">
      <h4>Patients List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(patient, index) in patients"
          :key="index"
        >
          {{ patient.nome }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import PatientsDataService from "../service/PatientsDataService";
import router from "../router";

export default {

  name: 'Patients',
  data() {
    return {
      patients: [],

    }
  },
  methods: {
    getPatients() {

      this.patients = ["Patient 1", "Patient 2", "Patient 3"];
      
      PatientsDataService.getAll()
      .then(response => {
          this.patients = response.data;
        })
        .catch();

    },
    newPatient() {
      router.push({name:"patient-details", params: { id: '3' } });

    }
  },
  mounted() {
    this.getPatients();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
