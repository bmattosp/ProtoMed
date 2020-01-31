const dbConfig = require("./db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  // sync: { force: true },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.patients = require("../../Domain/Patient.js")(sequelize, Sequelize);
db.consults = require("../../Domain/Consult.js")(sequelize, Sequelize);

db.patients.hasMany(db.consults);
db.consults.belongsTo(db.patients);

module.exports = db;