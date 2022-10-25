/// <reference types="cypress" />

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
    })
    
});

    it('Deve fazer o cadastro de faturamento com sucesso', () => {
        // cadastro de endereco
    });
});