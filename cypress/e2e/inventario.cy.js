describe('Inventario - Sauce Demo',()=>{

    beforeEach(()=>{
    cy.login('standard_user','secret_sauce')
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
    })

    it('Verificar cantidad de productos en el inventario',()=>{
        cy.verificarValorCarrito(6)
    })

    it('Ordenar productos por precio (de menor a mayor)',()=>{
        cy.get('[data-test="product-sort-container"]').select('lohi')
        cy.get('[data-test="product-sort-container"]').should('have.value','lohi')
        cy.get('.inventory_item_price').first().should('have.text','$7.99')
        cy.get('.inventory_item_price').last().should('have.text','$49.99')
    })
})