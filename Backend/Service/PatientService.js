const db = require("../Infra/SequelizeContext");
const Patient = db.patients;
const Consult = db.consults;
const Op = db.Sequelize.Op;

// Create and Save a Patient
exports.create = (req, res) => {

  try
  {
    if(req.body.nome == "")
    {
        res.status(400).send({
            message:"nome can not be empty!"
            });
            return;  
    }

    if(req.body.telefone == "")
    {
        res.status(400).send({
            message:"telefone can not be empty!"
            });
            return;  
    }

    if(req.body.sexo == "")
    {
        res.status(400).send({
            message:"sexo can not be empty!"
            });
            return;  
    }

    if(req.body.altura <= 0)
    {
        res.status(400).send({
            message:"altura is invalid!"
            });
            return;  
    }

    if(req.body.peso <= 0)
    {
        res.status(400).send({
            message:"peso is invalid!"
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
  }
  catch (err)
  {
    console.log(err.message);
    res.status(500).send();
  }
 };

  exports.findall = (req, res) => {

    console.log("function patients.findAll");
    Patient.findAll().
    then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).send({message: err.message || "Problem find all patients. Try again later."});
    });

  };

  exports.findById = (req, res) => {

    
    if(req.params.id <= 0)
    {
        res.status(400).send({
            message:"id is invalid!"
            });
            return;  
    }

    const id = req.params.id;


    var patientsData = Patient.findByPk(id, 
      { 
        include: [ 
        {
        model: db.consults,
        where : {data: {[Op.gte]:  new Date() }},
        as: 'scheduledConsults',
        required: false
        },

        {
        model: db.consults,
        where : {data: {[Op.lt]:  new Date() }},
        as: 'historicalConsults',
        required: false
        }]
      } 
    ).then(data => {res.send(data)})
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

      if(req.params.id <= 0)
      {
          res.status(400).send({
              message:"id is invalid!"
              });
              return;  
      }

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
    
