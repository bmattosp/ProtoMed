module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_DEFAULTDB,
    dialect:process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    pool: {
      max: parseInt(process.env.DB_POOL_MAX, 10),
      min: parseInt(process.env.DB_POOL_MIN, 10),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE, 10),
      idle: parseInt(process.env.DB_POOL_IDLE, 10)
    }
  };