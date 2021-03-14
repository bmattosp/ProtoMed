# ProtoMed
Project created for PBMED interview exam.

##

## Instrunctions to run the application

All commands showned here, should be executed by command line. I´ve used powershell.
There are two ways to run the Protomed environment:

- Docker
- Runing in local machine

### Docker

#### Requirements

>Docker instaled in your machine

#### Setup

 - Using command line, nav to the folder you have cloned the project.
 - run the command inside the project root folder:

        ```
        $docker-compose up --build 
        ```

 - wait to finish and that is it

 #### Accessing

  The default address to access the Protomed page is http://localhost:8080

#### Running Automated Tests

The project has two kind of auto tests:
 >Functional ui tests:
    > Using command line, nav to ./UiTests inside the project folder
    > run
    ```
     $npm install
    ```
    > After install finis run:
    ```
     $npx cypress open
    ```
    > Cypress will open a test window. Click two times in the sample_spec.js file
    > A new chrome window will open doing all automated tests
  
 >Integrated backend test:
    > Using command line, nav to ./Backend inside the project folder
    > run 
    ```
    $npm install
    ```
    > After finish, run:
    ```
     $npm run test
    ```
    > Wait for the result

#### Adminer

  Docker compose will install a db admin for the mysql container db. Access http://localhost:8083 and make queries in the protomedDB schema to see all the data.

### Local machine

#### Requirements

>MySQL:
     Link: https://www.mysql.com/downloads/  
     Chocolatey: choco install mysql

>Node.js
    Link: https://nodejs.org/en/download/
    Chocolatey: choco install nodejs


#### BackEnd setup

##### 1º step - Open the Backend folder

Open the command prompt, then navegate to /Backend dir inside the project dir.

##### 2º step - Dependencies install

Use npm to install all backend dependencies

```
npm install
```

##### 3º step - Config the sequelize context

Open the project code, then inside /Backend/.env has env variables to control database access
Edit the file and fill the fields with your database configuration.

DB_USER=<your db user>
DB_PASS=<db user password>
DB_PORT=<your mysql port>

##### 4º step - Script to create the db scheme

Open mysql and run the script above to create the scheme where all the tables will be in.

```
CREATE SCHEMA `protomeddb` ;
```

##### Final step - Run the server.js

Execute the command above to run the backend server
```
node server.js
```
After run, all database will be created by Sequelize, and the api routes will be up to use.



##### FrontEnd setup

All the commands has to be runned at /FrontEnd folder.

##### 1º step

Execute npm to install all the dependencies

```
npm install
```

##### 2º step

Execute the command above to run the vue application.
```
npm run serve
```

##### 3º step

open http://localhost:8080 to enter on the website.


