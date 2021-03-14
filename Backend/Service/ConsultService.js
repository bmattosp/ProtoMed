require("dotenv").config();
const db = require("../Infra/SequelizeContext");
const Consult = db.consults;
const Op = db.Sequelize.Op;

// Create and Save a Consult
exports.create = async (createDto) => {

    if(createDto === null || typeof createDto === 'undefined' )
    {
        return  {
            data: "",
            message:"invalid parameter object.",
            success: false
        };
    }

    if(isNaN(createDto.patientId) || createDto.patientId <= 0)
    {
        return  {
            data: "",
            message:"invalid patientId",
            success: false
        };
    }

    const creationReturn = {
        data: "",
        message: "The consult was not update. Unexpected error.",
        success: false
    };

    await Consult.create(createDto)
    .then( (consult) => {
            creationReturn.data = consult;
            creationReturn.success = true;
        });

    return  creationReturn;
 };

exports.findall = async () => {

    const result = {
        data: "",
        message: "The consult was not update. Unexpected error.",
        success: false
    };

    await Consult.findAll({include: db.patients })
    .then( (consult) => {
            result.data = consult;
            result.success = true;
        });

    return  result;

//   Consult.findAll({include: db.patients }).
//   then(data => {res.send(data)})
//   .catch(err => {
//       res.status(500).send({message: err.message || "Problem find all Consults. Try again later."})
//   })

};

exports.findallConsultsScheduleds = async function() {

    result = {
        data: "",
        message: "The consult was not update. Unexpected error.",
        success: false
    };

    await Consult.findAll({ where:{data: {[Op.gte]:  new Date() }} ,include: db.patients })
    .then( (consult) => {
            result.data = consult;
            result.success = true;

        });

        return result;
};

exports.updateNote = async (consultId, anotacao) => {

    var consult = Consult.findByPk(consultId);
    consult.anotacoes = anotacao;

    const result = {
        data: "",
        message: "The consult was not update. Unexpected error.",
        success: false
    };

    await Consult.update({anotacoes: consult.anotacoes}, 
        { where: { id: consultId } })
    .then( (consult) => 
        {
            result.data = consult;
            result.success = true;
        });

    return  result;

//   Consult.update({anotacoes: consult.anotacoes}, {
//     where: { id: oneConsult.consultId }
//   })
//   .then(data => {res.send(data)})
//   .catch(err => {
//       res.status(500).send({message: err.message || "Problem find all Consults. Try again later."})
//   });

};


exports.findById = async (consultId) => {

    const result = {
        data: "",
        message: "The consult was not update. Unexpected error.",
        success: false
    };

    if( consultId <= 0)
    {
        result.message = "id can not be empty!";
        result.success = false;
        return result;
        // res.status(400).send({
        //     message:"id can not be empty!"
        //     });
        //     return;  
    }

    await Consult.findByPk(consultId).
    then(data => {
        result.data = data;
        result.success = true;
    });

    return result;

};

exports.delete = async (consultId) => {

    const result = {
        data: "",
        message: "The consult was not update. Unexpected error.",
        success: false
    };

    if( consultId <= 0)
    {
        result.message = "id can not be empty!";
        result.success = false;
        return result;
        // res.status(400).send({
        //     message:"id can not be empty!"
        //     });
        //     return;  
    }

    await Consult.destroy({ where: { id: consultId } })
    .then(num => {
        if (num == 1) {
            result.data = data;
            result.success = true;
            result.message = "Consult was deleted!";

        } else 
        {
            result.data = data;
            result.success = true;
            result.message = "Consult id=${id} deleted!";
        }
    });
};
    
