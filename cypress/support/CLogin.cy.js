Cypress.Commands.add('login',(user,pass)=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(user)//standard_user
    cy.get('[data-test="password"]').type(pass)//secret_sauce
    cy.get('[data-test="login-button"]').click()
})