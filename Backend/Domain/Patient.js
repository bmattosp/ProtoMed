module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
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
        type: Sequelize.DECIMAL
      },
      peso: {
        type: Sequelize.DECIMAL
      }
    });
  
    return Patient;
  };