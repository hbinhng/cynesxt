describe('greet.cy.ts', () => {
  it('shoud visit /', () => {
    cy.visit('http://localhost:3000/');
  });

  it('should have greet text', () => {
    cy.intercept('/api/greet').as('greetApi');
    cy.wait('@greetApi').then(() => {
      expect(cy.$$('div#__next').text()).to.equal('Hello World!');
    });
  });
});
