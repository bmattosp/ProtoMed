<template>

  <section class="container">
    <h2>Patients List</h2>
    <div class="row">
      <div class="col">
        <button @click="newPatient()" class="btn btn-success">Novo Paciente</button>
      </div>
    </div>
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Data Nascimento</th>
          <th scope="col">Sexo</th>
          <th scope="col">Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient, index) in patients" :key="index" @click="clickTableRow(patient.id)">
          <td>
              {{ patient.id }}
          </td>
          <td>
              {{ patient.nome }}
          </td>
          <td>
              {{ConvertData(patient.dataNascimento)}}
          </td>
          <td>
              {{ patient.sexo }}
          </td>
          <td>
              {{ patient.telefone }}
          </td>
        </tr>
      </tbody>
    </table>



  </section>

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
      router.push({name:"newPatient"});

    },
    ConvertData(umaData) {
      return (new Date(umaData)).toLocaleDateString();

    },
    clickTableRow(idClick)
    {
      router.push({name:"patient-details", params: {id: idClick}});
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
