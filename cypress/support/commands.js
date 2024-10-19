/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('showRegisterForm', () => {
  cy.get('#registerForm').should('be.visible');
});

Cypress.Commands.add('showLoginForm', () => {
  cy.showRegisterForm().find('button[data-auth=login').click();
  cy.get('#loginForm').should('be.visible');
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('#loginEmail').type(email);
  cy.get('#loginPassword').type(password);
  cy.get('#loginForm').submit();
});

Cypress.Commands.add('loginFakeProfile', () => {
  cy.fixture('example').then((user) => {
    cy.intercept(
      'POST',
      `https://nf-api.onrender.com/api/v1//social/auth/login`,
      {
        statusCode: 200,
        body: {
          accessToken: 'fake-token',
          user: user.name,
        },
      },
    ).as('loginRequest');

    const fakePassword = Cypress.env('password');

    cy.login(user.email, fakePassword);

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
    cy.url().should('include', 'profile');

    cy.intercept(
      'GET',
      `https://nf-api.onrender.com/api/v1/social/profiles/**`,
      {
        statusCode: 200,
        body: {
          name: user.name,
          followers: [],
          following: [],
          posts: [],
        },
      },
    ).as('getProfile');

    cy.wait('@getProfile').its('response.statusCode').should('eq', 200);
  });
});

Cypress.Commands.add('isLoggedIn', () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem('token')).to.be.a.string;
  });
});
