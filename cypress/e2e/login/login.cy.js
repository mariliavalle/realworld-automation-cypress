import { elementsLogin } from "./elements";

describe('login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="#/login"]')
        .click();
  })

  it('C2 - Login com dados inválidos', () => {
    cy.get('.btn')
        .click();
  })

  it('C3 - Login com dados válidos', () => {
    cy.get(elementsLogin.userEmail)
        .should('have.attr', 'placeholder', 'Email')
        .type('emmaw@email.com');
    
    cy.get(elementsLogin.userPassword)
        .should('have.attr', 'placeholder', 'Password')
        .type('Teste123');
    
    cy.get('.btn')
        .click();
    
    cy.contains('Emma W');
  })

})