<template>
<div class="container">
  <div v-if="!subimitted" >
    <h2>{{currentPatient.nome}}</h2>
    <form>
      <div class="form-group">
        <label for="nome">Data Consulta</label>
        <input type="text" class="form-control" id="nome"
          v-model="currentPatient.nome"
        />
      </div>
      <div class="form-group">
        <label for="telefone">Telefone</label>
        <input type="text" class="form-control" id="telefone"
          v-model="currentPatient.telefone"
        />
      </div>
      <div class="form-group">
        <label for="sexo">Sexo</label>
        <input type="text" class="form-control" id="sexo"
          v-model="currentPatient.sexo"
        />
      </div>
      <div class="form-group">
        <label for="altura">Nome</label>
        <input type="text" class="form-control" id="altura"
          v-model="currentPatient.altura"
        />
      </div>
      <div class="form-group">
        <label for="peso">Nome</label>
        <input type="text" class="form-control" id="peso"
          v-model="currentPatient.peso"
        />
      </div>
      <div class="form-group">
        <input type="button" @click="updatePatient()" class="btn btn-success" id="updateBtn" value="Atualiza"/>
        <input type="button" @click="deletePatient()" class="btn btn-danger" id="deleteBtn" value="Exclui"/>
      </div>
    </form>

  </div>
  <div v-else>
    <h2>{{msgResult}}</h2>
  </div>
</div>
</template>

<script>

import PatientsDataService from "../service/PatientsDataService";

export default {

  name: 'PatientDetails',
  props: {
    id: -1
  },
  data() {
    return {
        currentPatient: null,
        subimitted: false,
        msgResult: 'Patient updated!'
    }
  },
  methods: {
    getPatient(id) {
      
      PatientsDataService.get(id)
      .then(response => {
          this.currentPatient = response.data;
        })
        .catch();

    },
    updatePatient()
    {
      PatientsDataService.update(this.id, this.currentPatient)
      .then(response => {
        this.subimitted = (response.status == 200);
      })
      .catch(err => {
        this.msgResult = "Something wents wrong. Try again. Server Message: " + err;
      });
    },
    deletePatient()
    {
      PatientsDataService.delete(this.id)
      .then(response => {
        this.subimitted = (response.status == 200);
        this.msgResult = "Patient was deleted!"
      })
      .catch(err => {
        this.msgResult = "Something wents wrong. Try again. Server Message: " + err;
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getPatient(this.$route.params.id);
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
