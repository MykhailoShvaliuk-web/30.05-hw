class LoginPage {
    visit(){
       cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
     }

     getPasswordField(){
        return cy.get('#loginFrm_password');
     }

     getSubmitButton(){
        return cy.get('#loginFrm > fieldset > button');
     }
}

export default new LoginPage();

