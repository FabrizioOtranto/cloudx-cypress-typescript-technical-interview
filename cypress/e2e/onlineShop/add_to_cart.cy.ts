describe('Cloudx technical interview', () => {

    it('Should allow the user to add products to the shopping cart', () => {
        cy.visit('https://pushing-it.vercel.app/');
        cy.get('[data-cy="registertoggle"]').dblclick();
        cy.get('[data-cy="user"]').type('pushingit');
        cy.get('[data-cy="pass"]').type('123456!');
        cy.get('[data-cy="submitForm"]').click();
        cy.get('[data-cy="onlineshoplink"]').click();
    })
})