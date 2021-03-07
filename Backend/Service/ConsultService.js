require("dotenv").config();
const db = require("../Infra/SequelizeContext");
const Consult = db.consults;
const Op = db.Sequelize.Op;

// Create and Save a Consult
exports.create = (createDto) => {

    if(createDto.data === null || createDto.patientId <= 0 )
    {
        return  {
            data: "",
            message:"patient can not be empty!",
            success: false
        };
    }

    const creationReturn = Consult.create(createDto);

    return  {
        data: creationReturn,
        message: "",
        success: true
    };
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

exports.updateNote = (req, res) => {

  var oneConsult =  req.body;

  var consult = Consult.findByPk(oneConsult.consultId);
  consult.anotacoes = oneConsult.anotacao;
  
  Consult.update({anotacoes: consult.anotacoes}, {
    where: { id: oneConsult.consultId }
  })
  .then(data => {res.send(data)})
  .catch(err => {
      res.status(500).send({message: err.message || "Problem find all Consults. Try again later."})
  })

};



exports.findById = (req, res) => {


    if( req.params.id <= 0)
    {
        res.status(400).send({
            message:"id can not be empty!"
            });
            return;  
    }

  const id = req.params.id;


  Consult.findByPk(id).
  then(data => {res.send(data)})
  .catch(err => {
      res.status(500).send({message: err.message || "Problem find all Consults. Try again later."})
  })

};

exports.delete = (req, res) => {

    
    if( req.params.id <= 0)
    {
        res.status(400).send({
            message:"id can not be empty!"
            });
            return;  
    }
    
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
    
