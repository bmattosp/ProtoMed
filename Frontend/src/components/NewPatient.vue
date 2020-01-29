<template>
<div class="container">
  <div v-if="!subimitted" >
    <h2>Novo Paciente</h2>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
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
        <label for="dataNascimento">Data de Nascimento</label>
        <input type="text" class="form-control" id="dataNascimento"
          v-model="currentPatient.dataNascimento"
        />
      </div>
      <div class="form-group">
        <label for="altura">Altura</label>
        <input type="text" class="form-control" id="altura"
          v-model="currentPatient.altura"
        />
      </div>
      <div class="form-group">
        <label for="peso">Peso</label>
        <input type="text" class="form-control" id="peso"
          v-model="currentPatient.peso"
        />
      </div>
      <div class="form-group">
        <input type="button" @click="savePatient()" class="btn btn-success" id="updateBtn" value="Cria"/>
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

  name: 'NewPatient',
  props: {

  },
  data() {
    return {
        currentPatient: 
        {
          nome: '',
          telefone: '',
          dataNascimento: '',
          sexo: '',
          altura: 0.00,
          peso: 0.00
        },
        subimitted: false,
        msgResult: 'Patient was created!'
    }
  },
  methods: {
    savePatient()
    {
      PatientsDataService.create(this.currentPatient)
      .then(response => {
        this.subimitted = (response.status == 200);
      })
      .catch(err => {
        this.msgResult = "Something wents wrong. Try again. Server Message: " + err;
      });
    }
  },
  mounted() {

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
