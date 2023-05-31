describe('Authorization&Registration', () => {
  it('Registration', () => {
    cy.visit('https://automationteststore.com');
    cy.get('#customernav').click();
    cy.get('#accountFrm > fieldset button').click();
    cy.get('#AccountFrm_firstname').type('Mykhailo').should('have.value', 'Mykhailo');
    cy.get('#AccountFrm_lastname').type('Shvaliuk').should('have.value', 'Shvaliuk');
    cy.get('#AccountFrm_email').type('misha.shvaljuk@gmail.com').should('have.value', 'misha.shvaljuk@gmail.com');
    cy.get('#AccountFrm_telephone').type('093-748-41-81').should('have.value', '093-748-41-81');
    cy.get('#AccountFrm_fax').type('there is no fax').should('have.value', 'there is no fax');
    cy.get('#AccountFrm_company').type('Automation JS').should('have.value', 'Automation JS');
    cy.get('#AccountFrm_address_1').type('Lviv, Shyroka 1').should('have.value', 'Lviv, Shyroka 1');
    cy.get('#AccountFrm_address_2').type('Lviv, Shyroka 2').should('have.value', 'Lviv, Shyroka 2');
    cy.get('#AccountFrm_city').type('Lviv').should('have.value', 'Lviv');
    cy.get('#AccountFrm_zone_id').select('Cardiff').should('have.value', '3526');
    cy.get('#AccountFrm_postcode').type('560015').should('have.value', '560015');
    cy.get('#AccountFrm_country_id').select('United Kingdom').should('have.value', '222');
    cy.get('#AccountFrm_loginname').type('MS7788').should('have.value', 'MS7788');
    cy.get('#AccountFrm_password').type('MS781!@#').should('have.value', 'MS781!@#');
    cy.get('#AccountFrm_confirm').type('MS781!@#').should('have.value', 'MS781!@#');
    cy.get('#AccountFrm_agree').check().should('be.checked');
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click();

  })

  it('Authorization', () => {
    cy.visit('https://automationteststore.com');
    cy.get('#customernav').click();
    cy.get('#loginFrm_loginname').type('MS7788').should('have.value', 'MS7788');
    cy.get('#loginFrm_password').type('MS781!@#').should('have.value', 'MS781!@#');
    cy.get('#loginFrm > fieldset > button').click();
    cy.get('span.subtext').should('have.text', 'Mykhailo');

  })

  it('Registration without mandatory field (First Name)', () => {
    cy.visit('https://automationteststore.com');
    cy.get('#customernav').click();
    cy.get('#accountFrm > fieldset button').click();
    cy.get('#AccountFrm_firstname').type('Mykhailo').should('have.value', 'Mykhailo');
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click();
    cy.get('#AccountFrm_lastname').should('have.css', 'border-bottom-color', 'rgb(169, 68, 66)');
    cy.get('#AccountFrm > div:nth-child(5) > fieldset > div:nth-child(2) > span')
    .should('have.text', 'Last Name must be between 1 and 32 characters!')
    .and('have.css', 'color' , 'rgb(169, 68, 66)');
    cy.get('#AccountFrm_email').should('have.css', 'border-bottom-color', 'rgb(169, 68, 66)');
    cy.get('#AccountFrm > div:nth-child(5) > fieldset > div:nth-child(3) > span')
    .should('have.text', 'Email Address does not appear to be valid!')
    .and('have.css', 'color' , 'rgb(169, 68, 66)');
    cy.get('#AccountFrm_address_1').should('have.css', 'border-bottom-color', 'rgb(169, 68, 66)');
    cy.get('#AccountFrm > div:nth-child(7) > fieldset > div:nth-child(2) > span')
    .should('have.text', 'Address 1 must be between 3 and 128 characters!')
    .and('have.css', 'color' , 'rgb(169, 68, 66)');
    cy.get('#AccountFrm_city').should('have.css', 'border-bottom-color', 'rgb(169, 68, 66)');
    cy.get('#AccountFrm > div:nth-child(7) > fieldset > div:nth-child(4) > span')
    .should('have.text', 'City must be between 3 and 128 characters!')
    .and('have.css', 'color' , 'rgb(169, 68, 66)');
    cy.get('#AccountFrm_postcode').should('have.css', 'border-bottom-color', 'rgb(169, 68, 66)');
    cy.get('#AccountFrm > div:nth-child(7) > fieldset > div:nth-child(6) > span')
    .should('have.text', 'Zip/postal code must be between 3 and 10 characters!')
    .and('have.css', 'color' , 'rgb(169, 68, 66)');
    cy.get('#AccountFrm_loginname').should('have.css', 'border-bottom-color', 'rgb(169, 68, 66)');
    cy.get('#AccountFrm > div:nth-child(9) > fieldset > div:nth-child(1) > span')
    .should('have.text', 'Login name must be alphanumeric only and between 5 and 64 characters!')
    .and('have.css', 'color' , 'rgb(169, 68, 66)');
    cy.get('#AccountFrm_password').should('have.css', 'border-bottom-color', 'rgb(169, 68, 66)');
    cy.get('#AccountFrm > div:nth-child(9) > fieldset > div:nth-child(2) > span')
    .should('have.text', 'Password must be between 4 and 20 characters!')
    .and('have.css', 'color' , 'rgb(169, 68, 66)');
    cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
    .should('have.css', 'background-color', 'rgb(242, 222, 222)')
    .and('have.text', '\n×\nError: You must agree to the Privacy Policy!');

  })
})