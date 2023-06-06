class HomePage {
    visit(){
       cy.visit('https://automationteststore.com');
    }

    getLoginorRegisteredButton(){
        return cy.contains('a', 'Login or register');
     }
}

export default new HomePage();