describe('Invalid Login function', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should not allow a user to login with invalid credentials and show an alert message', () => {
    cy.showLoginForm();

    cy.on('window:alert', (txt) => {
      expect(txt).to.equal(
        'Either your username was not found or your password is incorrect',
      );
    });

    cy.login('invalidEmail@example.no', 'invalidPassword');
  });
});
