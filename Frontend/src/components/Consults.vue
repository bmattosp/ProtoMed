<template>
  <section class="container">
    <h2>Consultas Agendadas</h2>
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Data Consulta</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(consult, index) in consults" :key="index" @click="clickTableRow(consult.id)">
          <td>
              {{ consult.id }}
          </td>
          <td>
              {{ consult.patient.nome }}
          </td>
          <td>
              {{ConvertData(consult.data)}}
          </td>
        </tr>
      </tbody>
    </table>



  </section>
</template>

<script>

import ConsultsDataService from "../service/ConsultsDataService";
import router from "../router";

export default {

  name: 'Consults',
  data() {
    return {
      consults: [],

    }
  },
  methods: {
    getConsults() {
      
      ConsultsDataService.getAllScheduleds()
      .then(response => {
          this.consults = response.data;
        })
        .catch();

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
    this.getConsults();
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
