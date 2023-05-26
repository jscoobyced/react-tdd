describe('Checking Cypress is configured', () => {
    it('Find the application \'root\' component.', () => {
        cy.visit('http://reactapp.localhost:3000/')

        cy.get('div[id="root"]')
    })
})