import { elements } from "./elements";

describe('Register', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  
  it('C1 - Registrar usuário com dados válidos', () => {
    cy.get('a[href="#/register"]')
      .click();

    // Verificação e preechimento dos campos
    cy.get(elements.userName)
      .should('have.attr', 'placeholder', 'Your Name')
      .type('Emma W');

    cy.get(elements.userEmail)
      .should('have.attr', 'placeholder', 'Email')
      .type('emmaw@email.com');
      
    cy.get(elements.userPassword)
      .should('have.attr', 'placeholder', 'Password')
      .type('Teste123');
    
    cy.get('.btn.btn-lg.btn-primary.pull-xs-right')
      .click();

    // Verificação da página
    cy.contains('Emma W');
  })
})