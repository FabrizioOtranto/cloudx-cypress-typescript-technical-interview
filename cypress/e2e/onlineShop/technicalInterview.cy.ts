describe('Cloudx technical interview', () => {

    it('Should allow the user to add a product to the shopping cart', () => {
        // MANDATORY CONDITIONS:
        // 1. Use Page Object Model - Create classes to encapsulate elements and methods for product page only
        // 2. Use Fixtures - Utilize JSON files for test data (users, products, etc.)
        cy.visit('https://pushing-it.vercel.app/');
        cy.get('[data-cy="registertoggle"]').dblclick();
        cy.get('[data-cy="user"]').type('pushingit');
        cy.get('[data-cy="pass"]').type('123456!');
        cy.get('[data-cy="submitForm"]').click();
        cy.get('[data-cy="onlineshoplink"]').click();
    });

    it('Should allow the user to verify products on the shopping cart', () => {
        cy.visit('https://pushing-it.vercel.app/');
        cy.get('[data-cy="registertoggle"]').dblclick();
        cy.get('[data-cy="user"]').type('pushingit');
        cy.get('[data-cy="pass"]').type('123456!');
        cy.get('[data-cy="submitForm"]').click();
        cy.get('[data-cy="onlineshoplink"]').click();
        cy.get('[name="Buzo Negro"]').click();
        cy.get('[data-cy="closeModal"]').click();
        cy.get('[data-cy="goShoppingCart"]').click();
    });

    it('Should allow the user to create a product on the API', () => {
        // MANDATORY CONDITIONS:
        // Id should be unique. 
        // Implement two different options for creating a product on the API knowing that the ID should be unique.
    });
});