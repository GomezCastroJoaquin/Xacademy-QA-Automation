describe('Lougout Sauce Demo',()=>{

    beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    //aqui validamos que sea la url especificada
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
    })

    it('Logout desde el menú hamburguesa',()=>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-menu').should('be.visible')
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.url().should('include','https://www.saucedemo.com/')
    })

})