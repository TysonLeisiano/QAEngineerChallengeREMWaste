describe('Todo App UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('Deletes a todo', () => {
    cy.contains('Test Todo Item')
      .parent()
      .contains('Delete') 
      .click();

    cy.contains('Test Todo Item').should('not.exist');
  });
});
