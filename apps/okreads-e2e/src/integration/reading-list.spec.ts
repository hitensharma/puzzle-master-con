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

  it('Then: I should mark my book as finished', () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);

    cy.get('.want-to-read')
      .first()
      .then(($btn) => {
        if ($btn.is(':disabled')) {
          // IF BUTTON IS DISABLED
          cy.get('[data-testing="toggle-reading-list"]').click();
          cy.get('.reading-list-item').each(() => {
            cy.get('[data-testing="remove-button"]').first().click();
          });
          cy.get('[data-testing="reading-list-item"]').should(
            'have.length.at.most',
            0
          );
          cy.get('[data-testing="close-reading-list"]').click();
          markBook();
        } else {
          // IF BUTTON IS NOT DISABLED
          markBook();
        }
      });
  });

  
  function markBook() {
    cy.get('.book-grid').each(() => {
      cy.get('.want-to-read').click({ multiple: true });
      cy.get('.want-to-read').should('be.disabled');
    });
    cy.get('[data-testing="reading-list-item"]').should(
      'have.length.greaterThan',
      0
    );
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('.reading-list-item').each(() => {
      cy.get('[data-testing="finish-button"]').then(($readBtn) => {
        if ($readBtn.is(':disabled')) {
          cy.get('[data-testing="remove-button"]').first().click();
        } else {
          cy.get('[data-testing="finish-button"]').click({
            multiple: true,
          });

          cy.get('[data-testing="reading-list-item"]').should(
            'contain.text',
            'Finished'
          );
          cy.get('[data-testing="remove-button"]').first().click();
        }
      });
    });
  }
});
