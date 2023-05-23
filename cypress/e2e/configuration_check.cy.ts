describe('Checking Cypress is configured', () => {
    it('Find the application \'root\' component.', () => {
        cy.visit('http://0.0.0.0:3000')

        cy.get('div[id="root"]')
    })
})