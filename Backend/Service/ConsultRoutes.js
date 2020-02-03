module.exports = app => {
    const consultService = require("./ConsultService");
  
    var router = require("express").Router();
  
    // Create a new Consult
    router.post("/", consultService.create);
  
    // Retrieve all Consults
    router.get("/", consultService.findall);

    // Retrieve all Consults
    router.get("/scheduleds", consultService.findallScheduleds);
  
    // Retrieve a single Consult with id
    router.get("/:id", consultService.findById);
  
    // Delete a Consult with id
    router.delete("/:id", consultService.delete);

     // Delete a Consult with id
    router.put("/note", consultService.updateNote);

  
    app.use('/api/consults', router);
  };