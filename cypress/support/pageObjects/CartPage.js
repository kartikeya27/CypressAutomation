class CartPage {
    cartAssertion() {
        return cy.get('.subheader')
    }

    clickOnCheckout() {
        return cy.get('a.btn_action.checkout_button')
    }
}

export default CartPage;