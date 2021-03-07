module.exports = app => {
    const consultService = require("./ConsultService");
  
    var router = require("express").Router();
  
    // Create a new Consult
    router.post("/", (req, res) => {
      try
      {
        const result = consultService.create(req.body);
        if(result.success === true)
          res.send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });
  
    // Retrieve all Consults
    router.get("/", (req, res) => {
      try
      {
        
        const result = consultService.findall();
        if(result.success === true)
          res.send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });

    // Retrieve all Consults
    router.get("/ConsultsScheduleds", (req, res) => {
      try
      {
        const result = consultService.findallConsultsScheduleds();
        if(result.success === true)
          res.send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });
  
    // Retrieve a single Consult with id
    router.get("/:id", (req, res) => {
      try
      {
        const result = consultService.findById(req.body.consultId);
        if(result.success === true)
          res.send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });
  
    // Delete a Consult with id
    router.delete("/:id", (req, res) => {
      try
      {
        const result = consultService.delete(req.body.consultId);
        if(result.success === true)
          res.send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });

     // Update Note in a Consult
    router.put("/note", (req, res) => {
      try
      {
        const result = consultService.updateNote(req.body.consultId, req.body.note);
        if(result.success === true)
          res.send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });
  
    app.use('/api/consults', router);
  };