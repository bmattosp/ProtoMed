<template>
<div class="container">
  <div v-if="!subimitted" >
    <h2>{{title + ' - ' + patientName}}</h2>
    <form>
      <div class="form-group">
        <label for="data">Data</label>
        <input type="datetime-local" class="form-control" id="data"
          v-model="currentConsult.data"
        />
      </div>
      <div class="form-group">
        <input type="button" @click="saveConsult()" class="btn btn-success" id="updateBtn" value="Cria"/>
      </div>
    </form>
  </div>
  <div v-else>
    <h2>{{msgResult}}</h2>
  </div>
</div>
</template>

<script>

import ConsultsDataService from "../service/ConsultsDataService";
import router from "../router";

export default {

  name: 'NewConsult',
  props: {

  },
  data() {
    return {
        currentConsult: 
        {
          data: '',
          anotacao: null,
          patientId: -1,
        },
        subimitted : false,
        patientName: "Paciente",
        title: 'Nova Consulta',
        msgResult: 'Consulta salva com sucesso!'

    }
  },
  methods: {
    saveConsult()
    {
      ConsultsDataService.create(this.currentConsult)
      .then(response => {
        this.subimitted = (response.status == 200);
        router.push({name:"patient-details", params: {id: this.currentConsult.patientId}});
      })
      .catch(err => {
        this.msgResult = "Something wents wrong. Try again. Server Message: " + err;
      });
    }
  },
  mounted() {
    this.currentConsult.patientId = this.$route.params.patientId;
    this.patientName = this.$route.params.patientName;
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
