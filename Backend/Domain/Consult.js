const Patient = require("./Patient");

module.exports = (sequelize, Sequelize) => {
    var Consult = sequelize.define("consult", {
      data: {
        type: Sequelize.DATEONLY
      },
      anotacoes: {
        type: Sequelize.CHAR,
        allowNull: true
      }
    //   ,
    //   patientId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: true,
    //     references: {
    //         model: "patients",
    //         key: "id"
    //     }
    //   }

    });

    // Consult.associate = function(models) {
    //     Consult.belongsTo(models.patient, {as: patientList, foreignKey: patientId});
    //   }; 
  
    return Consult;
  };