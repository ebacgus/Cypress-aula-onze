/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer o cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Gus', 'Souza', 'Shopee', 'Brasil', 'Antonio Rodrigues Fulcato 64', 'Casa', 'Guarulhos', 'São Paulo', '08400000', '11986200000', 'gustavo_tech@qualidade.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')



    });


    it.only('Deve fazer o cadastro de faturamento - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereço,
            dadosEndereco[1].complemento,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')



    });




});