module.exports = app => {
    const patients = require("./PatientService");
  
    var router = require("express").Router();
  
    // Create a new Patient
    router.post("/", async (req, res) => {
      try
      {
        const result = await patients.create(req.body);
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

  
    // Retrieve all patients
    router.get("/", async (req, res) => {
      try
      {
        const result = await patients.findall(req.body);
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
  
    // Retrieve a single Patient with id
    router.get("/:id", async (req, res) => {
      try
      {
        const result = await patients.findById(req.params.id);
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

  
    // Update a Patient with id
    router.put("/:id",  async (req, res) => {
      try
      {
        const result = await patients.update(req.body);
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
  
  
    // Delete a Patient with id
    router.delete("/:id", async (req, res) => {
      try
      {
        const result = await patients.delete(req.params.id);
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

  
    app.use('/api/patients', router);
  };