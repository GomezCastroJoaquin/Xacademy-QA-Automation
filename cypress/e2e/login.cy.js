describe('Login Suce Demo', () => {

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/')
  })

  it('login exitoso', () => {
    cy.login('standard_user','secret_sauce')
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
  })

  it('login contraseña incorrecta', () => {
    cy.login('standar_user','sauce')
    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username and password do not match any user in this service')
  })

  it('login con campos vacios',()=>{
    cy.get('[data-test="username"]').click
    cy.get('[data-test="password"]').click
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required')
  })
  
  it('Login con usuario bloqueado (locked_out_user)',()=>{
    cy.login('locked_out_user','secret_sauce')
    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Sorry, this user has been locked out.')
  })

})