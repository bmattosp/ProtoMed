<template>
<div class="container">
  <Alert v-bind:Message="msgResult"></Alert>
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
          v-model="currentPatient.telefone" v-mask="['(##)#########']"
        />
      </div>
      <div class="form-group">
        <label for="sexo">Sexo</label>
        <b-form-select id="sexo" v-model="currentPatient.sexo" :options="SexoOptions" size="sm" class="mt-3"></b-form-select>
      </div>
      <div class="form-group">
        <label for="dataNascimento">Data de Nascimento</label>
        <input type="date" class="form-control" id="dataNascimento"
          v-model="currentPatient.dataNascimento"
        />
      </div>
      <div class="form-group">
        <label for="altura">Altura</label>
        <input type="text" class="form-control" id="altura"
          v-model="currentPatient.altura" v-mask="'#.##'"
        />
      </div>
      <div class="form-group">
        <label for="peso">Peso</label>
        <input type="text" class="form-control" id="peso"
          v-model="currentPatient.peso" v-mask="['#.##', '##.##', '###.##' ]" 
        />
      </div>
      <div class="form-group">
        <input type="button" @click="savePatient()" class="btn btn-success" id="bntCreatePatient" value="Cria"/>
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
import router from "../router";
import Alert from "./AlertMessage";

export default {

  name: 'NewPatient',
  components: {
    Alert
  },
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
          altura: '',
          peso: ''
        },
        subimitted: false,
        msgResult: '',

        SexoOptions: [
          { value: '', text: 'Escolha uma opção' },
          { value: 'M', text: 'Masculino' },
          { value: 'F', text: 'Feminino' },
          { value: 'N', text: 'Não Quero Declarar' },
        ]
    }
  },
  methods: {
    savePatient()
    {
      PatientsDataService.create(this.currentPatient)
      .then(response => {
        if(response.status == 200)
        {
          this.subimitted = true;
          router.push({
            name:"patients", 
            params: {
              AlertMessage: {
                Success: true,
                Mensagem: "Paciente Criado com Sucesso!"
                }
              }
            });
        }
        else if (response.status == 400)
        {
          this.subimitted = false;
          this.msgResult = "Aconteceu algum erro : " + response.data.message;
        }
      })
      .catch(err => {
          if(err.response.status == 400)
            this.msgResult = err.response.data.message;
          else
            this.msgResult = "Something wents wrong. Try again. Server Message: " + err.response.data.message;
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
