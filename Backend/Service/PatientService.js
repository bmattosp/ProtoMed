// const db = require("../Domain");
// const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;

// Create and Save a Patient
exports.create = (req, res) => {

    if(!req.body.nome)
    {
        res.status(400).send({
            message:"nome can not be empty!"
            });
            return;  
    }

    const onePatient = {
        name: req.body.nome,
        telefone: req.body.telefone,
        sexo: req.body.sexo,
        altura: req.body.altura,
        peso: req.body.peso,
        dataNascimento: req.body.dataNascimento
    }

    Patient.create(onePatient).
    then(data=> {res.send.data(data)})
    .catch(err => {
        res.status(500).send({message: err.message || "Problem creating a new patient. Try again later."})
    })
 };

  exports.findall = (req, res) => {

    res.status(200).send({
        message: "FindAll is doesn´t ready to use!"
      });
  };