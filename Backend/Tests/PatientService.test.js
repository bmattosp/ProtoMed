require("dotenv").config();
const db = require("../Infra/SequelizeContext");
const consultService = require('../Service/ConsultService');
const patientService = require('../Service/PatientService');


test('Create patient, nome vazio. Expects error message \'nome can not be empty!', async () => {

  const patient = 
  {
    nome :  "",
    telefone : '(12)345678912',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'nome can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, nome undefined. Expects error message \'nome can not be empty!', async () => {

  const patient = 
  {
    telefone : '(12)345678912',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'nome can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});


test('Create patient, telefone vazio. Expects error message \'telefone can not be empty!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'telefone can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, telefone undefined. Expects error message \'telefone can not be empty!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'telefone can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, sexo vazio. Expects error message \'sexo can not be empty!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    sexo : '',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'sexo can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, sexo undefined. Expects error message \'sexo can not be empty!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'sexo can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, dataNascimento vazia. Expects error message \'dataNascimento can not be empty!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    sexo : 'Feminino',
    dataNascimento : '',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'dataNascimento can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, dataNascimento undefined. Expects error message \'dataNascimento can not be empty!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    sexo : 'Feminino',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'dataNascimento can not be empty!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, altura menor ou igual a zero. Expects error message \'altura is invalid!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 0,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'altura is invalid!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, altura undefined. Expects error message \'altura is invalid!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'altura is invalid!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, peso menor ou igual a zero. Expects error message \'peso is invalid!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.68,
    peso : 0
  };

  const resExpected = { 
    data : "",
    message : 'peso is invalid!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, peso undefined. Expects error message \'peso is invalid!', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.76
  };

  const resExpected = { 
    data : "",
    message : 'peso is invalid!',
    success : false

  };

  const res = await patientService.create(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Update patient, nome vazio. Expects error message \'nome can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "",
    telefone : '(12)345678912',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'nome can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, nome undefined. Expects error message \'nome can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    telefone : '(12)345678912',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'nome can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});


test('update patient, telefone vazio. Expects error message \'telefone can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'telefone can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, telefone undefined. Expects error message \'telefone can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'telefone can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, sexo vazio. Expects error message \'sexo can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    sexo : '',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'sexo can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, sexo undefined. Expects error message \'sexo can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    dataNascimento : '1932-12-22',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'sexo can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, dataNascimento vazia. Expects error message \'dataNascimento can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    sexo : 'Feminino',
    dataNascimento : '',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'dataNascimento can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, dataNascimento undefined. Expects error message \'dataNascimento can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    sexo : 'Feminino',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'dataNascimento can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, dataNascimento undefined. Expects error message \'dataNascimento can not be empty!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)345678923',
    sexo : 'Feminino',
    altura : 1.54,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'dataNascimento can not be empty!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, altura menor ou igual a zero. Expects error message \'altura is invalid!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 0,
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'altura is invalid!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('update patient, altura undefined. Expects error message \'altura is invalid!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    peso : 127.99
  };

  const resExpected = { 
    data : "",
    message : 'altura is invalid!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});


test('update patient, peso menor ou igual a zero. Expects error message \'peso is invalid!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.68,
    peso : 0
  };

  const resExpected = { 
    data : "",
    message : 'peso is invalid!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});


test('update patient, peso undefined. Expects error message \'peso is invalid!', async () => {

  const patient = 
  {
    id: 12,
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.76
  };

  const resExpected = { 
    data : "",
    message : 'peso is invalid!',
    success : false

  };

  const res = await patientService.update(patient);

  console.log("Response Returned: " + res);
  console.log("Response Expected: " + resExpected);

  return expect(res).toEqual(resExpected);
});

test('Create patient, Expects sucess', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.76,
    peso : 11.11
  };

  const resExpected = { 
    data : "",
    message : 'peso is invalid!',
    success : false

  };

  const resCreate = await patientService.create(patient);


  const resFind = await patientService.findall(patient);

  const createdPatient = resFind.data.find(el => el.nome === patient.nome);

  expect(createdPatient.nome).toBe(patient.nome);
  expect(createdPatient.telefone).toBe(patient.telefone);
  expect(createdPatient.sexo).toBe(patient.sexo);
  expect(createdPatient.dataNascimento).toBe(patient.dataNascimento);
  expect(Number.parseFloat(createdPatient.altura)).toBe(patient.altura);
  expect(Number.parseFloat(createdPatient.peso)).toBe(patient.peso);

  return;
});

test('Update patient. Expects sucess', async () => {

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(00)99999999',
    sexo : 'Masculino',
    dataNascimento : '1900-11-23',
    altura : 1.90,
    peso : 22.22
  };

  const resCreate = await patientService.create(patient);

  const resFind = await patientService.findall(patient);

  const createdPatient = resFind.data.find(el => el.nome === patient.nome);

  patient.id = createdPatient.id;
  const resupdate = await patientService.update(patient);

  const resFindUpdate = await patientService.findall(patient);

  const updatedPatient = resFindUpdate.data.find(el => el.nome === patient.nome);

  expect(updatedPatient.nome).toBe(patient.nome);
  expect(updatedPatient.telefone).toBe(patient.telefone);
  expect(updatedPatient.sexo).toBe(patient.sexo);
  expect(updatedPatient.dataNascimento).toBe(patient.dataNascimento);
  expect(Number.parseFloat(updatedPatient.altura)).toBe(patient.altura);
  expect(Number.parseFloat(updatedPatient.peso)).toBe(patient.peso);

  return;
});

test('Delete patient, Expects sucess', async () => {

  jest.setTimeout(1000000);

  const patient = 
  {
    nome :  "Integration test " + Date.now(),
    telefone : '(12)123456789',
    sexo : 'Feminino',
    dataNascimento : '1932-12-22',
    altura : 1.76,
    peso : 11.11
  };

  const resExpected = { 
    data : "",
    message : 'peso is invalid!',
    success : true

  };

  const resCreate = await patientService.create(patient);


  const resFind = await patientService.findall(patient);

  const createdPatient = resFind.data.find(el => el.nome === patient.nome);

  const resDelete = await patientService.delete(createdPatient.id);

  const resFindPosDelete = await patientService.findall(patient);

  const deletedPatient = resFindPosDelete.data.find(el => el.nome === patient.nome);

  expect(deletedPatient).toBe(undefined);

  return;
});