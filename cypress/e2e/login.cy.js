describe('Login Suce Demo', () => {

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/')
  })

  it('login exitoso', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    //aqui validamos que sea la url especificada
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
    //aqui valido que la clase ".app_logo" contenga el texto "Swag Labs"
    cy.get('.app_logo').should('have.text','Swag Labs')
  })

  it('login contraseña incorrecta', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username and password do not match any user in this service')
  })

  it('login con campos vacios',()=>{
    cy.get('[data-test="username"]').click
    cy.get('[data-test="password"]').click
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required')
  })
  
  it('Login con usuario bloqueado (locked_out_user)',()=>{
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Sorry, this user has been locked out.')
  })

})