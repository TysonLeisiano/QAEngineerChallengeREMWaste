describe('Todo App UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
    it('Edits an existing todo', () => {
    cy.contains('Test Todo Item').parent().find('[data-cy="edit-btn"]').click();
    cy.get('[data-cy="edit-todo-input"]').clear().type('Test Todo Item New');
    cy.get('[data-cy="save-btn"]').click();
    cy.contains('Test Todo Item New').should('be.visible');
    });
});
