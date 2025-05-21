import { usuarios } from '../../fixtures/usuarios.json';

describe('Register', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  
  usuarios.forEach(usuario => {
    it('C1 - Registrar usuário com dados válidos', () => {
      cy.register(usuario.name, usuario.email, usuario.password)
    })
  })

})