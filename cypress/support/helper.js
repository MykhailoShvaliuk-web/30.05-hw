import LoginPage from "./pages/LoginPage";
import UserPage  from "./pages/UserPage";

class TestHelpers {
    loginUser(){
        LoginPage.visit();
        LoginPage.getLoginField().type('MS7788');
        LoginPage.getPasswordField().type('MS781!@#');
        LoginPage.getSubmitButton().click();
    }

    findProducts(filter){
        UserPage.getFindInput().type(filter);
        UserPage.getButtonForSearch().click();
    }

    findProductByName(name){
        let wasFounded = false;
        return UserPage.getAllProductsNameOnPage().each((element) => {
            if(element.text() === name) {
                cy.wrap(element).click();
                wasFounded = true;
                return false
            }
            wasFounded = false;
        }).then(() =>  cy.wrap(wasFounded))
    }

     clickNextPage(){
        let wasClicked = false;
        return cy.get('#maincontainer > div > div > div > div > div:nth-child(7) > div > ul > li').each((el, i, list) => {

            if(i === list.length - 1){
                wasClicked = false;
                return false;
            }

            if(el.hasClass('disabled')){
                cy.wrap(list[i+1]).children().click()
                wasClicked = true
                return false;
            }
        }).then(() => {
            cy.wrap(wasClicked);
        })
    }

    findProductInAllPages(productName){
        return cy.get('body').then((body) =>{ 
            if(!body.find('#product_details').length){
                this.findProductByName(productName)
                .then(wasFound => {
                    if(wasFound){
                        return true;
                    } else {
                        this.clickNextPage().then((value) => {
                            if(value){
                                this.findProductInAllPages(productName);
                            } else {
                                return false;
                            }
                        })
                    }
                })
            } 
        })
    }

    addProductToCartFromProductView(){
        cy.get('#product li a').click();
    }

    goToCart(){
        cy.get('#cart_checkout2 > i').click();
        cy.get('#checkout_btn').click();
        cy.get('span.maintext').should('have.text', ' Your Order Has Been Processed!');
    }
}

export default new TestHelpers();
