import { elements } from "../e2e/login/elements"

Cypress.Commands.add('login', (email, password) => { 
    cy.get('a[href="#/login"]')
        .click();
        
    cy.get(elements.userEmail)
        .should('have.attr', 'placeholder', 'Email')
        .type(email);
    
    cy.get(elements.userPassword)
        .should('have.attr', 'placeholder', 'Password')
        .type(password);
    
    cy.get('.btn')
        .click();    
})

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