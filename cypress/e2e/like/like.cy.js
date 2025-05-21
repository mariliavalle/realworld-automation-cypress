import { elements } from "./elements";

describe('interactions with articles', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('rupertg@email.com', 'Teste12345');
    })
    

    it('C7 - Curtir um artigo', () => {
        cy.contains('button', 'Global Feed')
            .click();
        
        // Verificando o botão de curtir e realizar a curtida
        cy.get(elements.likeBtn)
            .first()
            .find('.counter')
            .click();
        
        cy.get(elements.likeBtn)
            .find('.counter')
            .should('contain', '2');
    })


})