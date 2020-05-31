class ProductPage {
    productAssertion() {
        return  cy.get('.product_label')
    }

    selectPrice() {
        return cy.get('select')
    }

    clickOnCart() {
        return cy.get('.fa-layers-counter.shopping_cart_badge')
    }
}

export default ProductPage;