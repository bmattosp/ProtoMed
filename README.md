# ProtoMed
Project created for PBMED interview exam.

# Instrunctions to run the application

All commands showned here, has to be executed by command line. I´ve used powershell.

# Requirements

>MySQL:
     Link: https://www.mysql.com/downloads/  
     Chocolatey: choco install mysql

>Node.js
    Link: https://nodejs.org/en/download/
    Chocolatey: choco install nodejs


## BackEnd setup

### 1º step - Open the Backend folder

Open the command prompt, then navegate to /Backend dir inside the project dir.

### 2º step - Dependencies install

Use npm to install all backend dependencies

```
npm install
```

### 3º step - Config the sequelize context

Open the project, then inside /Backend/Infra/SequelizeContext has the db.config.js file.
Edit the file and fill the fields with your database configuration.

Example:
```
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "blablabla",
    DB: "protomedDB",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
```

#### Final step - Run the server.js

Execute the command above to run the backend server
```
node server.js
```
After run, all database will be created by Sequelize, and the api routes will be up to use.



## FrontEnd setup

All the commands has to be runned at /FrontEnd folder.

### 1º step

Execute npm to install all the dependencies

```
npm install
```

#### 2º step

Execute the command above to run the vue application.
```
npm run serve
```

#### 3º step

open http://localhost:8080 to enter on the website.


