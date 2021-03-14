<template>
<div class="container">
  <div v-if="!subimitted" >
    <div>
    <h2>{{currentPatient.nome}}</h2>
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
        <label for="dataNascimetno">Data Nascimento</label>
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
      <div class="form-group d-flex flex-row-reverse">

        <button @click="updatePatient()" class="btn btn-success ml-2" id="updateBtn" value="Atualizar">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button type="button" @click="deletePatient()" class="btn btn-danger" id="deleteBtn">
          <i class="fas fa-trash-alt"></i>
        </button>

      </div>
    </form>
    </div>

    <div>
      <div class="row">
        <div class="col-12" id="accordion">
          <div class="card">
            <div class="card-header" >
              <div class="row">
                <div class="col-6">
                  <h2>Consultas Agendadas</h2>
                </div>
                <div class="col-6 d-flex justify-content-end">
                  <button @click="newConsult()" class="btn" id="newConsultBtn">
                    <i class="fas fa-plus-circle" style="font-size: 2em; color:green"></i>
                  </button>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12" id="accordion">
                  <div class="card" v-for="(consult, index) in currentPatient.scheduledConsults" :key="index">
                    <div class="card-header" >
                      <div class="row">
                        <div class="col-6">
                          <a class="card-link" data-toggle="collapse" :href="'#collapseSched' + index">
                            <i class="fas fa-folder-open"></i>
                            {{ConvertToDateComplete(consult.data)}}
                          </a>
                        </div>
                        <div class="col-6 d-flex justify-content-end" v-if="verifyChange(consult.id)">
                          <span class="">Alterado</span>
                        </div>
                      </div>
                    </div>
                    <div :id="'collapseSched' + index" class="collapse show" data-parent="#accordion">
                      <div class="card-body">
                        <div class="d-flex justify-content-end">
                          <b-button variant="outline" id="show-btn" @click="editingOneConsultNote(consult);$bvModal.show('editConsultNoteModal');">
                            <i class="fas fa-pencil-alt"></i>
                          </b-button>
                        </div>
                        <div>
                          <textarea class="form-control" v-model="consult.anotacoes"></textarea>                
                        </div>
 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>

      <div>
      <div class="row" v-show="false">
        <div class="col-12" id="accordionHist">
          <div class="card">
            <div class="card-header" >
              <div class="row">
                <div class="col-6">
                  <h2>Histórico de Consultas</h2>
                </div>
                <div class="col-6 d-flex justify-content-end">
                  <button @click="newConsult()" class="btn" id="newConsultBtn">
                    <i class="fas fa-plus-circle" style="font-size: 2em; color:green"></i>
                  </button>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12" id="accordionHist">
                    <div class="card" v-for="(consult, index) in currentPatient.historicalConsults" :key="index">
                      <div class="card-header">
                        <a class="card-link" data-toggle="collapse" :href="'#collapseHist' + index" aria-expanded="false">
                          <i class="fas fa-folder-open"></i>
                          {{ConvertToDateComplete(consult.data)}}
                        </a>
                      </div>
                      <div :id="'collapseHist' + index" class="collapse show" data-parent="#accordionHist">
                      <div class="card-body">
                        <div class="d-flex justify-content-end">
                          <b-button variant="outline" id="show-btn" @click="editingOneConsultNote(consult);$bvModal.show('editConsultNoteModal');">
                            <i class="fas fa-pencil-alt"></i>
                          </b-button>
                        </div>
                        <div>
                          <textarea class="form-control" v-model="consult.anotacoes"></textarea>                
                        </div>
 
                      </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>

  </div>
  <div v-else>
    <h2>{{msgResult}}</h2>
  </div>

  <div>
    <b-modal id="editConsultNoteModal" size="xl" 
        ref="modal"
        @ok="handleOk">
      <template v-slot:modal-title>
        <h5>{{currentPatient.nome + ' - ' + ConvertData(consultEditing.data)}}</h5>
      </template>
      <b-form>
        <b-form-group class="form-group">
          <label for="txtareaConsultNotes" class="col-form-label">Anotacoes:</label>
          <textarea rows="20" cols="500" class="form-control" id="txtareaConsultNotes" v-model="consultEditing.anotacoes"></textarea>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>

</div>
</template>

<script>

import PatientsDataService from "../service/PatientsDataService";
import ConsultsDataService from "../service/ConsultsDataService";
import router from "../router";
import utils from "../utils";

export default {

  name: 'PatientDetails',
  props: {
    id: -1
  },
  data() {
    return {
        currentPatient: {nome:  '' },
        subimitted: false,
        msgResult: 'Patient updated!',
        showNewConsult: false,
        consultEditing: { data: '2020-01-01'},
        consultsSavedResult: [],
        SexoOptions: [
          { value: null, text: 'Escolha uma opção' },
          { value: 'M', text: 'Masculino' },
          { value: 'F', text: 'Feminino' },
          { value: 'N', text: 'Não Quero Declarar' },
        ]
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
    },
    newConsult()
    {
      router.push({name:"newConsult", params: {patientId: this.currentPatient.id, patientName: this.currentPatient.nome}});

    },
    updateConsultNotes()
    {
      if(this.consultEditing == null)
        return false;

      var oneConsult =  
        {
          consultId: this.consultEditing.id,
          anotacao: this.consultEditing.anotacoes,
          patientId: this.currentPatient.patientId,
        };
      
      ConsultsDataService.updateConsultNote(oneConsult)
      .then(
        response => {
          if(response.status == 200)
          {
            this.consultsSavedResult.push({
              consultId: this.consultEditing.id,
              success: true,
              msgResult: "Updated"});
            
            return true;
          }
          else
          {
            this.consultsSavedResult.push({
              consultId: this.consultEditing.id,
              success: false,
              msgResult: "Error: Try Again"});

              return false;
          }

      })
      .catch(err => {
        this.msgResult = "Something wents wrong. Try again. Server Message: " + err;
      });

      return true;
      
    },
    editingOneConsultNote(consult)
    {
      this.consultEditing = consult;

      this.$bvModal.show('editConsultNotes');

    },
    ConvertData(umaData) {
      return utils.ConvertData(umaData);

    },
    ConvertToDateComplete(umaData) {
      return utils.ConvertToDateComplete(umaData);

    },
    hideModal()
    {
      document.getElementById("editConsultNotes").modal('hide');
    },
    handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        if(this.updateConsultNotes())
          this.$nextTick(() => {this.$bvModal.hide('editConsultNoteModal')})

    },
    verifyChange(paramconsultId)
    {
      if(this.consultsSavedResult.length <= 0)
        return false;

      function equal(id)
      {
        return id.consultId == paramconsultId
      }

      const savedResult = this.consultsSavedResult.find(equal);

      return savedResult.success;
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
