import { elements } from "./elements";

describe('Manter artigos', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('emmaw@email.com', 'Teste123');
    })

    it('C4 - Criar artigo', () => {
        
        //Criação do artigo
        cy.get(elements.btnNewArticle)
            .click();
        
        cy.get(elements.articleTitle)
            .should('have.attr', 'placeholder', 'Article Title')
            .type('New article');
        
        cy.get(elements.articleDescription)
            .should('have.attr', 'placeholder', "What's this article about?")
            .type('Cypress');
        
        cy.get(elements.articleBody)
            .should('have.attr', 'placeholder', 'Write your article (in markdown)')
            .type('Cypress é uma ferramenta de teste de front-end moderna, usada para automação de testes end-to-end em aplicações web.');

        cy.get(elements.articleTags)
            .should('have.attr', 'placeholder', 'Enter tags')
            .type('Automation');
        
        cy.contains('button', 'Publish Article')
            .click();
        
        // Confirmação do novo artigo
        cy.contains('New article');
    })



    it('C5 - Editar um artigo', () => {
        
        // Verificação do artigo
        cy.contains('button', 'Global Feed')
            .click();
        
        cy.get(elements.articlePreview)
            .should('have.length', 1);
        
        // Editando artigo
        cy.get('.preview-link')
            .click();

        cy.contains('button', 'Edit Article')
            .click();
        
        cy.get(elements.articleTitle)
            .clear()
            .type('Automation with Cypress');
        
        cy.contains('button', 'Update Article')
            .click();
        
        // Confirmação da edição
        cy.contains('Automation with Cypress');
        
    })



    it('C6 - Deletar um artigo', () => {
        // Verificação do artigo
        cy.contains('button', 'Global Feed')
            .click();
        
        cy.get(elements.articlePreview)
            .should('have.length', 1);

        cy.get('.preview-link')
            .click();

        // Deletando o artigo
        cy.contains('button', 'Delete Article')
            .click();
        
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Want to delete the article?');
            // Simula o clique no OK
            return true;
         })

        // Confirmação
        cy.contains('button', 'Global Feed')
            .click();
        
        cy.get(elements.articlePreview)
            .should('have.length', 1)
            .and('contain', 'Articles not available.');
    })
})