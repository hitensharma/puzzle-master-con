describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should undo my actions', () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    cy.get('.want-to-read').first().click();
    cy.get('.want-to-read').first().should('be.disabled');

    cy.get('.undo-dialog > .mat-simple-snackbar > span').should(
      'contain.text',
      'Added'
    );
    cy.get(
      '.undo-dialog > .mat-simple-snackbar > .mat-simple-snackbar-action > button'
    ).click();
    cy.get('.want-to-read').first().should('not.be.disabled');
    cy.get('.want-to-read').first().click();
    cy.get('.want-to-read').first().should('be.disabled');

    cy.get('[data-testing="reading-list-item"]').should(
      'have.length.greaterThan',
      0
    );
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('.reading-list-item > .reading-list-button > button').click();
    cy.get('.undo-dialog > .mat-simple-snackbar > span').should(
      'contain.text',
      'Removed'
    );
    cy.get(
      '.undo-dialog > .mat-simple-snackbar > .mat-simple-snackbar-action > button'
    ).focused()
      .click();
    cy.get('.want-to-read').first().should('not.be.disabled');
    cy.get('.want-to-read').first().click();
    cy.get('.want-to-read').first().should('be.disabled');
  });
});
