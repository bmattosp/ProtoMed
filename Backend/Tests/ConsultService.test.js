const consultService = require('../Service/ConsultService');
const patientService = require('../Service/PatientService');

test('Pass request with pacientId <= 0. Expects error message \'invalid patientId\' ', () => {

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

  var res = consultService.create(req.body);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);
  expect(res).toEqual(resExpected);
});

test('Pass request with undefined value. Expects error message \'invalid parameter object.\' ', () => {

  var req = {
  };

  var resExpected = { 
    data : "",
    message : 'invalid parameter object.',
    success : false

  };

  var res = consultService.create(req.body);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);
  expect(res).toEqual(resExpected);
});

test('Pass request with null value. Expects error message \'invalid parameter object.\' ', () => {

  var req = {
    body : null
  };

  var resExpected = { 
    data : "",
    message : 'invalid parameter object.',
    success : false

  };

  var res = consultService.create(req.body);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);
  expect(res).toEqual(resExpected);
});


test('Pass request with valid patientId, string and zero values. Expects Data Error', () => {

  const currentConsult = 
        {
          data: '',
          anotacao: null,
          patientId: 0,
        };

  var resExpected = { 
    data : "",
    message : "",
    success : true

  };

  const res = consultService.create(currentConsult);

});

test('Pass request with filled values. Expects success', async () => {

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

  const patientBefore = await patientService.findById(currentConsult.patientId);

  console.log(patientBefore.scheduledConsults);

  await consultService.create(currentConsult);

  const patientAfter  = await consultService.findById(currentConsult.patientId);

  console.log(patientAfter.scheduledConsults);

  return expect(patientBefore.scheduledConsults).toEqual(patientAfter.scheduledConsults);

});