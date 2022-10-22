/// <reference types="cypress" />

context('Funcionalidade do login', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('gustavo_cypress@teste.com')
    cy.get('#password').type('gustavo.gustavo**')
    cy.get('.woocommerce-form > .button').click()
    cy.get('a > .hidden-xs').should('contain' , 'Welcome gustavo_cypress !')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gustavo_cypress (não é gustavo_cypress? Sair')


});

it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
    
    cy.get('#username').type('gustavo_cypress@teste.co')
    cy.get('#password').type('gustavo.gustavo**')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')



});


it('Deve exibir uma mensagem de erro ao enserir senha inválida ', () => {
    cy.get('#username').type('gustavo_cypress@teste.com')
    cy.get('#password').type('gustavo.gustavo*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail gustavo_cypress@teste.com está incorreta')
});

});