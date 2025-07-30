describe('Todo App UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Creates a new todo', () => {
    cy.get('[data-cy="todo-input"]').type('Test Todo Item');
    cy.get('[data-cy="add-todo-button"]').click();
    cy.contains('Test Todo Item').should('be.visible');
    cy.get('[data-cy="todo-input"]').should('have.value', '');
  });

});
