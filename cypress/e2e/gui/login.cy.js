describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})

/*beforeEach(() =>{
  cy.visit('/')
})

it('verifica acesso a tela de registro', () => {
  
})*/