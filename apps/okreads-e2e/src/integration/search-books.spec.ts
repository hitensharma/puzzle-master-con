describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  it('Then: I should see search results as I am typing', () => {
    // TODO: Implement this test!
    
    cy.get('input[type="search"]').type('ja');
    cy.get('[data-testing="book-item"]').should('have.length.lessThan', 1);
    cy.wait(200);
    cy.get('input[type="search"]').type('vascript');
    cy.wait(300);
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });
});