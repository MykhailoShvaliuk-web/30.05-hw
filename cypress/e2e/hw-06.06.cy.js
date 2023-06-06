import  TestHelpers  from "../support/helper";

describe('Test', () => {
    beforeEach(() => {
        TestHelpers.loginUser();
    })

    it('should find product and click', () => {
        TestHelpers.findProducts('e');
        TestHelpers.findProductInAllPages('Fiorella Purple Peep Toes').then((value) => {
            if(value){
                console.log('Product was found')
                cy.get('#product_details').should('exist');
                TestHelpers.addProductToCartFromProductView();
                TestHelpers.goToCart();
                
            } else {
                console.log('Product was not found')
                cy.get('#product_details').should('not.exist');
            }
        })
    })
})