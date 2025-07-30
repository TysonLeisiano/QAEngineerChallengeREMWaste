describe('Todo App UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
    it('Edits an existing todo', () => {
    cy.contains('Testing APIs is fun').parent().find('[data-cy="edit-btn"]').click();
    cy.get('[data-cy="edit-todo-input"]').clear().type('Testing APIs is fun');
    cy.get('[data-cy="save-btn"]').click();
    cy.contains('Testing APIs is fun').should('be.visible');
    });
});
