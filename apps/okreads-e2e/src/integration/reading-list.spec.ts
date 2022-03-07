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
    cy.get('.want-to-read')
      .first()
      .then(($btn) => {
        if ($btn.is(':disabled')) {
          cy.get('[data-testing="toggle-reading-list"]').click();
          cy.get('.reading-list-item').each(() => {
            cy.get('[data-testing="remove-button"]').first().click();
          });
          cy.get('[data-testing="reading-list-item"]').should(
            'have.length.at.most',
            0
          );
          cy.get('[data-testing="close-reading-list"]').click();
          checkUndo();
        } else {
          checkUndo();
        }
      });
  });

  function checkUndo() {
    // ? ADD TO READING LIST UNDO BUTTON
    cy.get('.want-to-read').first().click();
    cy.get('.want-to-read').first().should('be.disabled');
    cy.get('[data-testing="reading-list-item"]').should(
      'have.length.greaterThan',
      0
    );
    cy.get('.undo-dialog > .mat-simple-snackbar > span').should(
      'contain.text',
      'Added'
    );
    cy.get(
      '.undo-dialog > .mat-simple-snackbar > .mat-simple-snackbar-action > button'
    )
      .last()
      .click();
    cy.get('.want-to-read').first().should('not.be.disabled');
    cy.get('[data-testing="reading-list-item"]').should(
      'have.length.at.most',
      0
    );

    // ? REMOVE FROM READING LIST UNDO BUTTON
    cy.get('.want-to-read').first().click();
    cy.get('.want-to-read').first().should('be.disabled');
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-item"]').should(
      'have.length.greaterThan',
      0
    );
    cy.get('[data-testing="close-reading-list"]').click();
    cy.get('.undo-dialog > .mat-simple-snackbar > span').should(
      'contain.text',
      'Added'
    );
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="remove-button"]').first().click();
    cy.get('[data-testing="close-reading-list"]').click();
    cy.get('.undo-dialog > .mat-simple-snackbar > span').should(
      'contain.text',
      'Removed'
    );
    cy.get(
      '.undo-dialog > .mat-simple-snackbar > .mat-simple-snackbar-action > button'
    ).click();
    cy.get('.want-to-read').first().should('be.disabled');
    cy.get('[data-testing="reading-list-item"]').should(
      'have.length.greaterThan',
      0
    );
  }
});
