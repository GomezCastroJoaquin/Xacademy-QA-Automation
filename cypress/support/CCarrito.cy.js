Cypress.Commands.add('verificarValorCarrito',(cantidad)=>{
    cy.get('[data-test="inventory-item-name"]').should('have.length',cantidad)
})