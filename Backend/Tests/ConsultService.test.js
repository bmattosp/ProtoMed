const consultService = require('../Service/ConsultService');

test('Pass request with pacientId <= 0. Expects error message \'patient can not be empty!\' ', () => {

  var req = {
    body : {
        patientId : -1,

    }
  };

  var resExpected = { 
    data : "",
    message : 'patient can not be empty!',
    success : false

  };

  var res = consultService.create(req.body);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);
  expect(res).toEqual(resExpected);
});

test('Pass request with empty string and zero values. Expects success', () => {

  var currentPatient = {
        nome: '',
        telefone: '',
        dataNascimento: '',
        sexo: '',
        altura: 0.00,
        peso: 0.00
      };

  var resExpected = { 
    data : "",
    message : "",
    success : true

  };

  const res = consultService.create(currentPatient);

  console.log(res);

  return consultService.create(currentPatient).data.then(response => {
        expect(response).not.toBeNull();
  }).catch( err => 
    {
      console.log(err);
    });

});

test('Pass request with filled values. Expects success', () => {

  var currentPatient = {
        nome: 'testeautomaziado',
        telefone: '123456789',
        dataNascimento: '20000101',
        sexo: 'M',
        altura: 1.00,
        peso: 2.00
      };

  var resExpected = { 
    data : "",
    message : "",
    success : true

  };

  const res = consultService.create(currentPatient);

  console.log(res);

  return consultService.create(currentPatient).data.then(response => {
        expect(response).not.toBeNull();
  }).catch( err => 
    {
      console.log(err);
    });

});