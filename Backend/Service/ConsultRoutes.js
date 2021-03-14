module.exports = app => {
    const consultService = require("./ConsultService");
  
    var router = require("express").Router();
  
    // Create a new Consult
    router.post("/", async (req, res) => {
      try
      {
        const result = await consultService.create(req.body);
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
    router.get("/", async (req, res) => {
      try
      {
        
        const result = await consultService.findall();
        if(result.success === true)
          res.status(200).send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });

    // Retrieve all Consults
    router.get("/ConsultsScheduleds", async (req, res) => {
      try
      {
        const result = await consultService.findallConsultsScheduleds();
        if(result.success === true)
          res.status(200).send(result.data);
        else
          res.status(400).send({message:result.message});
      }
      catch(err)
      {
        res.status(500).send({message: err.message || "Problem creating a new consult. Try again later."});
      }
  
    });
  
    // Retrieve a single Consult with id
    router.get("/:id", async (req, res) => {
      try
      {
        const result = await consultService.findById(req.body.consultId);
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
    router.delete("/:id", async (req, res) => {
      try
      {
        const result = await consultService.delete(req.body.consultId);
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
    router.put("/note", async (req, res) => {
      try
      {
        const result = await consultService.updateNote(req.body.consultId, req.body.note);
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