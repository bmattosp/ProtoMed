
module.exports = (sequelize, Sequelize) => {
    var Patient = sequelize.define("patient", {
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      dataNascimento: {
        type: Sequelize.DATEONLY
      },
      sexo: {
        type: Sequelize.CHAR
      },
      altura: {
        type: Sequelize.DECIMAL(4,2)
      },
      peso: {
        type: Sequelize.DECIMAL(5,2)
      }
    });

    // Patient.associate = function(models) {
    //   Patient.hasMany(models.consult, {as: consultsList, foreignKey: patientId});
    // }; 

    return Patient;
  };

