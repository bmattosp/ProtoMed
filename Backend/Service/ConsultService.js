const db = require("../Infra/SequelizeContext");
const Consult = db.consults;
const Op = db.Sequelize.Op;

// Create and Save a Consult
exports.create = (req, res) => {

    if(req.body.patientId <= 0)
    {
        res.status(400).send({
            message:"nome can not be empty!"
            });
            return;  
    }

    const oneConsult = {
        data: req.body.data,
        anotacoes: req.body.anotacoes,
        patientId: req.body.patientId
    }

    Consult.create(oneConsult).
    then(data=> {res.send(data)})
    .catch(err => {
        res.status(500).send({message: err.message || "Problem creating a new patient. Try again later."})
    })
 };

exports.findall = (req, res) => {

  Consult.findAll({include: db.patients }).
  then(data => {res.send(data)})
  .catch(err => {
      res.status(500).send({message: err.message || "Problem find all Consults. Try again later."})
  })

};

exports.findallScheduleds = (req, res) => {

  Consult.findAll({ where:{data: {[Op.gte]:  new Date() }} ,include: db.patients }).
  then(data => {res.send(data)})
  .catch(err => {
      res.status(500).send({message: err.message || "Problem find all Consults. Try again later."})
  })

};



exports.findById = (req, res) => {

  const id = req.params.id;


  Consult.findByPk(id).
  then(data => {res.send(data)})
  .catch(err => {
      res.status(500).send({message: err.message || "Problem find all Consults. Try again later."})
  })

};

exports.delete = (req, res) => {
  const id = req.params.id;

  Consult.destroy({
      where: { id: id }
  })
      .then(num => {
      if (num == 1) {
          res.send({
          message: "Consult was deleted!"
          });
      } else {
          res.send({
          message: `Consult id=${id} deleted!`
          });
      }
      })
      .catch(err => {
      res.status(500).send({
          message: "Erro to delete Consult id=" + id
      });
      });
};
    
