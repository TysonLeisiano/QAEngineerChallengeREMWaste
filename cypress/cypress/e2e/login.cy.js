describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });
 
    it('Logs in with valid credentials', () => {
    cy.get('[data-cy="login-email"]').type('valid@example.com');
    cy.get('[data-cy="login-password"]').type('correctpassword');
    cy.get('[data-cy="login-button"]').click();
    cy.url().should('include', '/');
    cy.contains('Todo List With REST API').should('be.visible');
  });

  it('Fails to login with invalid credentials', () => {
    cy.get('[data-cy="login-email"]').type('invalid@example.com');
    cy.get('[data-cy="login-password"]').type('correctpassword');
    cy.get('[data-cy="login-button"]').click();
    cy.contains('Invalid credentials').should('be.visible');
  });
});
