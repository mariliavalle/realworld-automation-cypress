import { elementsLogin } from "../e2e/login/elements"
import { elements } from "../e2e//register/elements";
import { articleElements } from "../e2e/maintain-articles/elements";


Cypress.Commands.add('login', (email, password) => {
  cy.get('a[href="#/login"]')
    .click();

  cy.get(elementsLogin.userEmail)
    .should('have.attr', 'placeholder', 'Email')
    .type(email);

  cy.get(elementsLogin.userPassword)
    .should('have.attr', 'placeholder', 'Password')
    .type(password);

  cy.get('.btn')
    .click();
})



Cypress.Commands.add('register', (name, email, password) => {
  cy.get('a[href="#/register"]')
    .click();

  // Verificação e preechimento dos campos
  cy.get(elements.userName)
    .should('have.attr', 'placeholder', 'Your Name')
    .clear()
    .type(name);

  cy.get(elements.userEmail)
    .should('have.attr', 'placeholder', 'Email')
    .clear()
    .type(email);

  cy.get(elements.userPassword)
    .should('have.attr', 'placeholder', 'Password')
    .clear()
    .type(password);

  cy.get('.btn.btn-lg.btn-primary.pull-xs-right')
    .click();

  // Verificação da página
  cy.contains(name);
})



Cypress.Commands.add('newArticle', (title, description, body, tags) => {
  cy.get(articleElements.btnNewArticle).click();

  cy.get(articleElements.articleTitle)
    .should('have.attr', 'placeholder', 'Article Title')
    .type(title);

  cy.get(articleElements.articleDescription)
    .should('have.attr', 'placeholder', "What's this article about?")
    .type(description);

  cy.get(articleElements.articleBody)
    .should('have.attr', 'placeholder', 'Write your article (in markdown)')
    .type(body);

  cy.get(articleElements.articleTags)
    .should('have.attr', 'placeholder', 'Enter tags')
    .type(tags);

  cy.contains('button', 'Publish Article').click();

  // Confirmação do novo artigo
  cy.contains(title).should('exist');
});




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