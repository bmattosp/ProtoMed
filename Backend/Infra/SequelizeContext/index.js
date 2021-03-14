const dbConfig = require("./db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    port: dbConfig.port,
    // sync: { force: true },
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  async function connectionRetrier(tentatives)
  {
    let connectionSucess = false;
    for(let i = 0; i <= tentatives; i++)
    {
      await sequelize.authenticate()
      .then( () => {
        console.log('Connection has been established successfully.');
        connectionSucess = true;
      })
      .catch( err => {
        console.log('connectionSucess: ' + connectionSucess);
        console.error('Unable to connect to the database:', err);
      });

      if(connectionSucess === true) 
      {
        console.log('connectionSucess: ' + connectionSucess);
        break;
      }
      else await (new Promise( resolve => setTimeout(resolve, 10000)));
    }

    if(!connectionSucess) 
    {
      console.error("Unable to connect database. Closing the application. Please check the database connection and try again");
      process.exit(1);
    }

    sequelize.sync();
  }

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.patients = require("../../Domain/Patient.js")(sequelize, Sequelize);
db.consults = require("../../Domain/Consult.js")(sequelize, Sequelize);

db.patients.hasMany(db.consults, { as: 'historicalConsults'});
db.patients.hasMany(db.consults, { as: 'scheduledConsults'});
db.consults.belongsTo(db.patients);

db.connectionRetrier = connectionRetrier;

module.exports = db;