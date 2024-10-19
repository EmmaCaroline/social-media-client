describe('Logout function', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow the user to log out with the logout button', () => {
    cy.showLoginForm();
    cy.loginFakeProfile();
    cy.isLoggedIn();

    cy.get('button[data-auth=logout]').click();
    cy.isLoggedOut();
  });
});
