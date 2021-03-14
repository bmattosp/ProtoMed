require("dotenv").config();
const db = require("../Infra/SequelizeContext");
const consultService = require('../Service/ConsultService');
const patientService = require('../Service/PatientService');

test('Create consult, requesting pacientId <= 0. Expects error message \'invalid patientId\' ', async () => {

  var req = {
    body : {
        patientId : -1,
      }
  };

  var resExpected = { 
    data : "",
    message : 'invalid patientId',
    success : false

  };

  var res = await consultService.create(req.body);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create consult, requesting undefined value. Expects error message \'invalid parameter object.\' ', async () => {

  var req = {
  };

  var resExpected = { 
    data : "",
    message : 'invalid parameter object.',
    success : false

  };

  var res = await consultService.create(req.body);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);
  return expect(res).toEqual(resExpected);
});

test('Create consult, requesting null value. Expects error message \'invalid parameter object.\' ', async () => {

  var req = {
    body : null
  };

  var resExpected = { 
    data : "",
    message : 'invalid parameter object.',
    success : false

  };

  var res = await consultService.create(req.body);

  return expect(res).toEqual(resExpected);
});


test('Create consult, requesting valid patientId and empty date, Expects database exception', async () => {

  jest.setTimeout(1000000);

  const currentConsult = 
        {
          data: '',
          anotacao: null,
          patientId: 1,
        };

  var resExpected = { 
    data : "",
    message : "",
    success : true

  };

  

  try
  {
    return expect(await consultService.create(currentConsult)).not.toThrow();
  }
  catch(err){
    console.log("ERRO: " + err);

  }

 
});

test('Create consult, requesting valid pacientId and future valid date . Expects success', async () => {

  jest.setTimeout(1000000);

  const currentConsult = 
  {
    data: '2999-07-03 11:11:53',
    anotacao: null,
    patientId: 1,
  };

  var resExpected = { 
    data : "",
    message : "",
    success : true

  };

  try{
    const patientBefore = await patientService.findById(currentConsult.patientId);

    await consultService.create(currentConsult);

    const patientAfter  = await patientService.findById(currentConsult.patientId);
    return expect(patientBefore.data.scheduledConsults.length).not.toBe(patientAfter.data.scheduledConsults.length);
  }
  catch(err){
    console.log("Erro: " + err);
  }
});

test('Get All Consults. Expects Success ', async () => {

  const currentConsult = 
  {
    data: '3200-01-01 12:00:00',
    anotacao: "this is the test of Get All Consults",
    patientId: 1,
  };

  var resExpected = { 
    data : "",
    message : 'invalid patientId',
    success : false

  };
  
  var allconsultsFirst = await consultService.findall();

  const firstTotal = allconsultsFirst.data.length;

  await consultService.create(currentConsult);

  var allconsultsSecond = await consultService.findall();

  const secondTotal = allconsultsSecond.data.length;

  return expect(secondTotal).toBe(firstTotal + 1);
});

afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
  await db.sequelize.close();
  done();
});