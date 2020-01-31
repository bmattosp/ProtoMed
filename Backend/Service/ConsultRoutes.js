module.exports = app => {
    const consultService = require("./ConsultService");
  
    var router = require("express").Router();
  
    // Create a new Patient
    router.post("/", consultService.create);
  
    // Retrieve all patients
    router.get("/", consultService.findall);

    // Retrieve all patients
    router.get("/scheduleds", consultService.findallScheduleds);
  
    // Retrieve a single Patient with id
    router.get("/:id", consultService.findById);
  
    // Delete a Patient with id
    router.delete("/:id", consultService.delete);

  
    app.use('/api/consults', router);
  };