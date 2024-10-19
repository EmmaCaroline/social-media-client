describe('Login function', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow a valid, registered user to log in with the login form', () => {
    cy.showLoginForm();
    cy.loginFakeProfile();
    cy.isLoggedIn();
  });
});
