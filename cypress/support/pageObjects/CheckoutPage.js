class CheckoutPage {
    checkoutAssertion() {
        return cy.get('.subheader')
    }

    firstnameEditBox() {
        return cy.get('input[id="first-name"]')
    }

    lastnameEditBox() {
        return cy.get('input[id="last-name"]')
    }

    zipcodeEditBox() {
        return cy.get('input[id="postal-code"]')
    }
}

export default CheckoutPage;