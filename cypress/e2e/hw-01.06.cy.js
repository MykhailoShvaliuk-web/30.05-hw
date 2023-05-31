it('Buying a goods', () => {
    cy.visit('https://automationteststore.com');
    cy.get('#customernav').click();
    cy.get('#loginFrm_loginname').type('MS7788').should('have.value', 'MS7788');
    cy.get('#loginFrm_password').type('MS781!@#').should('have.value', 'MS781!@#');
    cy.get('#loginFrm > fieldset > button').click();
    cy.get('span.subtext').should('have.text', 'Mykhailo');
    cy.get('#filter_keyword').type('BENEFIT BELLA BAMBA').should('have.value', 'BENEFIT BELLA BAMBA');
    cy.get('.button-in-search').click();
    cy.get('.bgnone').should('have.text', 'Benefit Bella Bamba');
    cy.get('#product li a').click();
    cy.get('span.maintext').should('have.text', ' Shopping Cart');
    cy.get('#cart_checkout2 > i').click();
    cy.get('span.maintext').should('have.text', ' Checkout Confirmation');
    cy.get('#checkout_btn').click();
    cy.get('span.maintext').should('have.text', ' Your Order Has Been Processed!');
})