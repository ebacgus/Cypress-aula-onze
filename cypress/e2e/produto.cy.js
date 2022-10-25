/// <reference types="cypress" />



describe('Funcionalidade pagina de Produto', () => {

    beforeEach(() => {
        cy.visit('produtos/page/2')

    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')


            // .eq(4)
            .contains('Beaumont Summit Kit')
            .click()


    });


    it('Deve adicionar o produto no carrinho', () => {



        cy.get('[class="product-block grid"]')
            .contains('Balboa Persistence Tee').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(15)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '15')
        cy.get('.woocommerce-message').should('contain', '15 × “Balboa Persistence Tee” foram adicionados no seu carrinho.')

    });


    it('Deve adicionar o produto no carrinho', () => {
        var quantidade = 25


        cy.get('[class="product-block grid"]')
            .contains('Balboa Persistence Tee').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Balboa Persistence Tee” foram adicionados no seu carrinho.')
    })

    
    })
