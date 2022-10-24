/// <reference types="cypress" />
var  faker  =  require ( 'faker' ) ;

describe('Funcionalidade pre cadastro', () => {
    

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});


it('Deve completar o pre cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('teste.teste@gus')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type('gustavo')
    cy.get('#account_last_name').type('pereira')
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')

});


it('Deve completar o pre cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('teste.teste@gus')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.name.firstName())
    cy.get('#account_last_name').type(faker.name.lastName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')

});


it.only('Deve completar o pre cadastro com sucesso', () => {
let nameFaker = faker.name.firstName()
let sobrenomeFaker = faker.name.lastName()
let emailFaker = faker.internet.email(nameFaker)



    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type('teste.teste@gus')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nameFaker )
    cy.get('#account_last_name').type(sobrenomeFaker)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')

});


});
