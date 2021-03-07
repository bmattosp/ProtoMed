const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const db = require("./Infra/SequelizeContext");

const app = express();

var corsOptions = {
  origin: "http://localhost:" + process.env.CORS_ORIGIN_PORT,
  
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

// first route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to protomed server. This a hello world test!" });
});

require("./Service/PatientRoutes")(app);
require("./Service/ConsultRoutes")(app);


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});