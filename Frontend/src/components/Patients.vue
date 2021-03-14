<template>

  <section class="container">
    <Alert v-bind:Message="AlertMessage.Mensagem" v-bind:Success="AlertMessage.Success"></Alert> 
    <h2>Pacientes</h2>
    <div class="row">
      <div class="col d-flex justify-content-end mb-5">
        <button @click="newPatient()" id="btnNewPatient" class="btn btn-success">Novo Paciente</button>
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
        <tr style="cursor: pointer" v-for="(patient, index) in patients" :key="index" @click="clickTableRow(patient.id)">
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
import Alert from "./AlertMessage";
import router from "../router";

export default {

  name: 'Patients',
  components: {
    Alert
  },
  data() {
    return {
      patients: [],
      AlertMessage:
      {
        Show: true,
        Mensagem: "",
        Success: true
      }

    }
  },
  methods: {
    getPatients() {

      this.patients = [];

      PatientsDataService.getAll()
      .then(response => {
          if(response.data == null)
            this.AlertMessage = {Mensagem:"No result!"};
          else 
            this.patients = response.data;
        })
        .catch(err => {
          this.AlertMessage = {Mensagem:"Something wents wrong! - " + err};
        });

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
    if(this.$route.params.AlertMessage != null)
      this.AlertMessage = this.$route.params.AlertMessage;

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
