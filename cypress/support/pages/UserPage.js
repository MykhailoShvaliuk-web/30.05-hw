export class UserPage{
    getFindInput(){
        return cy.get('#filter_keyword');
    }

    getButtonForSearch() {
        return cy.get('.button-in-search');
    }

    getAllProductsNameOnPage(){
        return cy.get('div.thumbnails.grid.row.list-inline > div > div.fixed_wrapper > div > a')
    }
}

export default new UserPage();

