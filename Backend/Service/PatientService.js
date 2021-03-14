const db = require("../Infra/SequelizeContext");
const Patient = db.patients;
const Consult = db.consults;
const Op = db.Sequelize.Op;

// Create and Save a Patient
exports.create = async (patient) => {

  const result = {
    data: "",
    message: "Erro unexpected trying to find patient",
    success: false
  };

  if (patient.nome === "" || typeof patient.nome === 'undefined') {
    result.success = false;
    result.message = "nome can not be empty!";
    return result;
  }

  if (patient.telefone === "" || typeof patient.telefone === 'undefined') {
    result.success = false;
    result.message = "telefone can not be empty!";
    return result;
  }

  if (patient.sexo === "" || typeof patient.sexo === 'undefined') {
    result.success = false;
    result.message = "sexo can not be empty!";
    return result;
  }

  if (patient.dataNascimento === "" || typeof patient.dataNascimento === 'undefined') {
    result.success = false;
    result.message = "dataNascimento can not be empty!";
    return result;
  }

  if (isNaN(patient.altura) || patient.altura <= 0) {
    result.success = false;
    result.message = "altura is invalid!";
    return result;
  }

  if (isNaN(patient.peso) || patient.peso <= 0) {
    result.success = false;
    result.message = "peso is invalid!";
    return result;
  }

  const onePatient = {
    nome: patient.nome,
    telefone: patient.telefone,
    sexo: patient.sexo,
    altura: patient.altura,
    peso: patient.peso,
    dataNascimento: patient.dataNascimento
  };

  await Patient.create(onePatient)
    .then((consult) => {
      result.data = consult;
      result.success = true;
    })
    .catch(
      (err) => {
        result.data = "";
        result.success = false;
        result.message = err.message;
      });

  return result;
};

exports.findall = async () => {

  const result = {
    data: "",
    message: "Erro unexpected trying to find patient",
    success: false
  };

  console.log("function patients.findAll");
  await Patient.findAll()
    .then((consult) => {
      result.data = consult;
      result.success = true;
    })
    .catch(
      (err) => {
        result.data = "";
        result.success = false;
        result.message = err.message;
      });

  return result;

};

exports.findById = async (patientId) => {

  const result = {
    data: "",
    message: "Erro unexpected trying to find patient",
    success: false
  };

  if (patientId <= 0) {
    result.message = "id is invalid!";
    return result;
  }

  await Patient.findByPk(patientId,
    {
      include: [
        {
          model: db.consults,
          where: { data: { [Op.gte]: new Date() } },
          as: 'scheduledConsults',
          required: false
        },

        {
          model: db.consults,
          where: { data: { [Op.lt]: new Date() } },
          as: 'historicalConsults',
          required: false
        }]
    }
  )
    .then((consult) => {
      result.data = consult;
      result.success = true;
    }).catch(
      (message) => {
        result.data = "";
        result.success = false;
        result.message = message;

      });

  return result;

};

exports.update = async (patient) => {

  const result = {
    data: "",
    message: "Erro unexpected trying to find patient",
    success: false
  };

  if (isNaN(patient.id) || patient.id <= 0) {
    result.success = false;
    result.message = "id is invalid!";
    return result;
  }

  if (patient.nome === "" || typeof patient.nome === 'undefined') {
    result.success = false;
    result.message = "nome can not be empty!";
    return result;
  }

  if (patient.telefone === "" || typeof patient.telefone === 'undefined') {
    result.success = false;
    result.message = "telefone can not be empty!";
    return result;
  }

  if (patient.sexo === "" || typeof patient.sexo === 'undefined') {
    result.success = false;
    result.message = "sexo can not be empty!";
    return result;
  }

  if (patient.dataNascimento === "" || typeof patient.dataNascimento === 'undefined') {
    result.success = false;
    result.message = "dataNascimento can not be empty!";
    return result;
  }

  if (isNaN(patient.altura) || patient.altura <= 0) {
    result.success = false;
    result.message = "altura is invalid!";
    return result;
  }

  if (isNaN(patient.peso) || patient.peso <= 0) {
    result.success = false;
    result.message = "peso is invalid!";
    return result;
  }

  const id = patient.id;

  await Patient.update(patient, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        result.message = "Patient updated.";

      } else {
        result.message = "Cannot update Patient id=${id}";
      }
      result.success = true;
    })
    .catch(
      (err) => {
        result.data = "";
        result.success = false;
        result.message = err.message;
      });

  return result;
};


exports.delete = async (patientId) => {

  const result = {
    data: "",
    message: "Erro unexpected trying to find patient",
    success: false
  };

  if (isNaN(patientId) || patientId <= 0) {
    result.success = false;
    result.message = "id is invalid!";
    return result;
  }

  const id = patientId;

  await Patient.destroy({
    where: { id: id }
  })
  .then((num) => {
    if (num == 1) {
      result.message = "Patient was deleted!";

    } else {
      result.message = "Patient id=${id} deleted!";
    }
    result.success = true;
  })
  .catch(
    (err) => {
      result.data = "";
      result.success = false;
      result.message = err.message;
    });
  
    return result;
};

