module.exports = app => {
    const consultService = require("./ConsultService");
  
    var router = require("express").Router();
  
    // Create a new Consult
    router.post("/", (req, res) => {
      
      const createReturn = consultService.create(req.body).
      then(response => {
        if(response.success === true)
          res.send(data);
        else
          res.status(400).send({message:response.message});
      })
      .catch(err => {
          res.status(500).send({message: err.message || "Problem creating a new patient. Try again later."})
      });
  
    });
  
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