describe('Login function', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow a registered user to log in with the login form with valid credentials', () => {
    cy.showLoginForm();
    cy.loginFakeProfile();
    cy.isLoggedIn();
  });
});
