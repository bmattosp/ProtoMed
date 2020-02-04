const Patient = require("./Patient");

module.exports = (sequelize, Sequelize) => {
    var Consult = sequelize.define("consult", {
      data: {
        type: Sequelize.DATE
      },
      anotacoes: {
        type: Sequelize.TEXT,
        allowNull: true
      }

    });

    return Consult;
  };