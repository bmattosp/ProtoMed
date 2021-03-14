const { assert } = require("console");

describe('Open the Protomed site', () => {
       
    it('It contains the name Protomed', () => {
      cy.visit('/');

      cy.get('h1').should("contain", "PROTOMED");
    });

    it('Open new patient', () => {
        cy.visit('/');

        cy.get('#btnNewPatient').click();

      });

    it('Create new patient', () => {
        cy.visit('/');

        cy.get('#btnNewPatient').click();

        cy.get('#nome').type('auto functional test').should('have.value', 'auto functional test');
        cy.get('#telefone').type('99999999999').should('have.value', '(99)999999999');

        cy.get('#sexo').select('Masculino');

        cy.get('#dataNascimento').type('1900-11-11').should('have.value', '1900-11-11');
        cy.get('#altura').type('190').should('have.value', '1.90');
        cy.get('#peso').type('6800').should('have.value', '68.00');

        cy.get('#bntCreatePatient').click();

        cy.wait(3000);

        cy.get('#alertMessage').should('be.visible');
        cy.get('#alertMessage').should('contain', 'Paciente Criado com Sucesso!');


      });

    it('Show the details of a pacient', () => {
        cy.visit('/');

        cy.get('#btnNewPatient').click();

        const date = Date.now();
        const patientName =  "functional test " + date;
        const telefone = '12345678912';
        const expectedTelelefone = '(12)345678912';
        const sexo = 'Feminino';
        const dataNascimento = '1932-12-22';
        const altura = '1541';
        const expectedAltura = '1.54';
        const peso = '12799';
        const expectedPeso = '127.99';
        

        cy.get('#nome').type(patientName).should('have.value', patientName);
        cy.get('#telefone').type(telefone).should('have.value', expectedTelelefone);
        cy.get('#sexo').select(sexo);
        cy.get('#dataNascimento').type(dataNascimento).should('have.value', dataNascimento);
        cy.get('#altura').type(altura).should('have.value', expectedAltura);
        cy.get('#peso').type(peso).should('have.value', expectedPeso);

        cy.get('#bntCreatePatient').click();

        cy.contains(patientName).click();

        cy.get('#nome').should('have.value', patientName);
        cy.get('#telefone').should('have.value', expectedTelelefone);
        cy.get('#sexo').should('contain', sexo);
        cy.get('#dataNascimento').should('have.value', dataNascimento);
        cy.get('#altura').should('have.value', expectedAltura);
        cy.get('#peso').should('have.value', expectedPeso);


      });

      it('Update the details of a pacient', () => {
        cy.visit('/');

        cy.get('#btnNewPatient').click();

        const date = Date.now();
        const patientName =  "functional test " + date;
        const telefone = '12345678912';
        const expectedTelelefone = '(12)345678912';
        const sexo = 'Feminino';
        const dataNascimento = '1932-12-22';
        const altura = '1541';
        const expectedAltura = '1.54';
        const peso = '12799';
        const expectedPeso = '127.99';
        

        cy.get('#nome').type(patientName).should('have.value', patientName);
        cy.get('#telefone').type(telefone).should('have.value', expectedTelelefone);
        cy.get('#sexo').select(sexo);
        cy.get('#dataNascimento').type(dataNascimento).should('have.value', dataNascimento);
        cy.get('#altura').type(altura).should('have.value', expectedAltura);
        cy.get('#peso').type(peso).should('have.value', expectedPeso);

        cy.get('#bntCreatePatient').click();

        cy.contains(patientName).click();

        const patientNewValues = {
            patientName: "functional test " + (Date.now()),
            telefone: '36987654321',
            expectedTelelefone: '(36)987654321',
            sexo: 'Masculino',
            sexoExpectedValue: 'M',
            dataNascimento: '1990-03-05',
            altura: '1689634',
            expectedAltura: '1.68',
            peso:'10096345',
            expectedPeso: '100.96',
        };

        cy.get('#nome').clear().type(patientNewValues.patientName).should('have.value', patientNewValues.patientName);
        cy.get('#telefone').clear().type(patientNewValues.telefone).should('have.value', patientNewValues.expectedTelelefone);
        cy.get('#sexo').select(patientNewValues.sexo);
        cy.get('#dataNascimento').clear().type(patientNewValues.dataNascimento).should('have.value', patientNewValues.dataNascimento);
        cy.get('#altura').clear().type(patientNewValues.altura).should('have.value', patientNewValues.expectedAltura);
        cy.get('#peso').clear().type(patientNewValues.peso).should('have.value', patientNewValues.expectedPeso);

        cy.get('#updateBtn').click();

        cy.visit('/');

        cy.contains(patientNewValues.patientName).click();

        cy.get('#nome').should('have.value', patientNewValues.patientName);
        cy.get('#telefone').should('have.value', patientNewValues.expectedTelelefone);
        cy.get('#sexo').should('have.value',patientNewValues.sexoExpectedValue);
        cy.get('#dataNascimento').should('have.value', patientNewValues.dataNascimento);
        cy.get('#altura').should('have.value', patientNewValues.expectedAltura);
        cy.get('#peso').should('have.value', patientNewValues.expectedPeso);
       

      });

      it('Schedule a consult for a pacient', () => {
        cy.visit('/');

        cy.get('#btnNewPatient').click();

        const date = Date.now();
        const patientName =  "functional test " + date;
        const telefone = '12345678912';
        const expectedTelelefone = '(12)345678912';
        const sexo = 'Feminino';
        const dataNascimento = '1932-12-22';
        const altura = '1541';
        const expectedAltura = '1.54';
        const peso = '12799';
        const expectedPeso = '127.99';
        

        cy.get('#nome').type(patientName).should('have.value', patientName);
        cy.get('#telefone').type(telefone).should('have.value', expectedTelelefone);
        cy.get('#sexo').select(sexo);
        cy.get('#dataNascimento').type(dataNascimento).should('have.value', dataNascimento);
        cy.get('#altura').type(altura).should('have.value', expectedAltura);
        cy.get('#peso').type(peso).should('have.value', expectedPeso);

        cy.get('#bntCreatePatient').click();

        cy.contains(patientName).click();

        cy.get('#newConsultBtn').click();

        const consultDate = '2053-12-22T11:05';

        cy.get('#data').type(consultDate).should('have.value', consultDate);

        cy.get('#updateBtn').click();
        
        cy.get('*').contains("Consultas Agendadas").click();

        cy.contains(patientName);

      });

      it('Schedule a consult and take a consult note', () => {
        cy.visit('/');

        cy.get('#btnNewPatient').click();

        const date = Date.now();
        const patientName =  "functional test " + date;
        const telefone = '12345678912';
        const expectedTelelefone = '(12)345678912';
        const sexo = 'Feminino';
        const dataNascimento = '1932-12-22';
        const altura = '1541';
        const expectedAltura = '1.54';
        const peso = '12799';
        const expectedPeso = '127.99';
        

        cy.get('#nome').type(patientName).should('have.value', patientName);
        cy.get('#telefone').type(telefone).should('have.value', expectedTelelefone);
        cy.get('#sexo').select(sexo);
        cy.get('#dataNascimento').type(dataNascimento).should('have.value', dataNascimento);
        cy.get('#altura').type(altura).should('have.value', expectedAltura);
        cy.get('#peso').type(peso).should('have.value', expectedPeso);

        cy.get('#bntCreatePatient').click();

        cy.contains(patientName).click();

        cy.get('#newConsultBtn').click();

        const consultDate = '2053-12-22T11:05';

        cy.get('#data').type(consultDate).should('have.value', consultDate);

        cy.get('#updateBtn').click();

        cy.get('#accordion').within(($accordion) => {
            cy.get('#show-btn').its(0).click();
        });


        const noteText = "qualquer coisa" + Date.now() + Date.now();
        cy.get('#txtareaConsultNotes').type(noteText).should('have.value', noteText);

        cy.get('#editConsultNoteModal___BV_modal_content_').within(($accordion) => {
            cy.get('.btn-primary').its(0).click();
        });

        cy.get('#accordion').within(($accordion) => {
            cy.get('textarea').its(0).should('have.value', noteText);
        });
        
   });

    it('Delete a patient', () => {
        cy.visit('/');

        cy.get('#btnNewPatient').click();

        const date = Date.now();
        const patientName =  "functional test " + date;
        const telefone = '12345678912';
        const expectedTelelefone = '(12)345678912';
        const sexo = 'Feminino';
        const dataNascimento = '1932-12-22';
        const altura = '1541';
        const expectedAltura = '1.54';
        const peso = '12799';
        const expectedPeso = '127.99';
        

        cy.get('#nome').type(patientName).should('have.value', patientName);
        cy.get('#telefone').type(telefone).should('have.value', expectedTelelefone);
        cy.get('#sexo').select(sexo);
        cy.get('#dataNascimento').type(dataNascimento).should('have.value', dataNascimento);
        cy.get('#altura').type(altura).should('have.value', expectedAltura);
        cy.get('#peso').type(peso).should('have.value', expectedPeso);

        cy.get('#bntCreatePatient').click();

        cy.contains(patientName).click();

        cy.get('#deleteBtn').click();

        cy.get('h2').should("contain", "Patient was deleted!");        
    
    });

      
  });