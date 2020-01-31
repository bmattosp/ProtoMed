const db = require("../Infra/SequelizeContext");
const Patient = db.patients;
const Consult = db.consults;
const Op = db.Sequelize.Op;

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
        nome: req.body.nome,
        telefone: req.body.telefone,
        sexo: req.body.sexo,
        altura: req.body.altura,
        peso: req.body.peso,
        dataNascimento: req.body.dataNascimento
    }

    Patient.create(onePatient).
    then(data=> {res.send(data)})
    .catch(err => {
        res.status(500).send({message: err.message || "Problem creating a new patient. Try again later."})
    })
 };

  exports.findall = (req, res) => {

    Patient.findAll().
    then(data => {res.send(data)})
    .catch(err => {
        res.status(500).send({message: err.message || "Problem find all patients. Try again later."})
    })

  };

  exports.findById = (req, res) => {

    const id = req.params.id;


    Patient.findByPk(id, {include: db.consults })
    .then(data => {res.send(data)})
    .catch(err => {
        res.status(500).send({message: err.message || "Problem find all patients. Try again later."})
    })

  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Patient.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Patient updated."
          });
        } else {
          res.send({
            message: `Cannot update Patient id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });

    };


    exports.delete = (req, res) => {
    const id = req.params.id;

    Patient.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Patient was deleted!"
            });
        } else {
            res.send({
            message: `Patient id=${id} deleted!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Erro to delete Patient id=" + id
        });
        });
    };
    
