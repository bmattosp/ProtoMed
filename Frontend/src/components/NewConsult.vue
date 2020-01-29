<template>
<div class="container">
  <div>
    <h2>Nova Consulta</h2>
    <form>
      <div class="form-group">
        <label for="data">Data</label>
        <input type="text" class="form-control" id="data"
          v-model="currentConsult.data"
        />
      </div>
      <div class="form-group">
        <input type="button" @click="saveConsult()" class="btn btn-success" id="updateBtn" value="Cria"/>
      </div>
    </form>
  </div>
</div>
</template>

<script>

import ConsultsDataService from "../service/ConsultsDataService";

export default {

  name: 'NewConsult',
  props: {

  },
  data() {
    return {
        currentConsult: 
        {
          data: '',
          anotacao: null
        },
    }
  },
  methods: {
    saveConsult()
    {
      ConsultsDataService.create(this.currentPatient)
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
