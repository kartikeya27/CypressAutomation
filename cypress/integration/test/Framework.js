// <referen/ce types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CartPage from '../../support/pageObjects/CartPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'

describe('Regression Test Suite', function() {
    before(function() {
        //runs once before all tests in the block
        cy.fixture('login').then(function(logindata) {
            this.logindata = logindata
        })
        cy.fixture('addproduct').then(function(adddata) {
            this.adddata = adddata
        })
        cy.fixture('removeproduct').then(function(removedata) {
            this.removedata = removedata
        })
        cy.fixture('checkout').then(function(checkoutdata) {
            this.checkoutdata = checkoutdata
        })
    })

    it('Login Page Test Case', function() {
        const loginPage = new LoginPage()
        const productPage = new ProductPage()
        const cartPage = new CartPage()
        const checkoutPage = new CheckoutPage()

        cy.visit(Cypress.env('url'))
        loginPage.getUsernameEditBox().type(this.logindata.userName)
        loginPage.getPasswordEditBox().type(this.logindata.password)
        loginPage.getLoginButton().click()

        productPage.productAssertion().should('have.text', 'Products')
        productPage.selectPrice().select('hilo')
        cy.addProduct(this.adddata.prodName1,this.adddata.prodName2)
        productPage.clickOnCart().click()

        cartPage.cartAssertion().should('have.text', 'Your Cart')
        cy.removeProduct(this.removedata.removeProduct)
        cartPage.clickOnCheckout().click()

        checkoutPage.checkoutAssertion().should('have.text', 'Checkout: Your Information')
        checkoutPage.firstnameEditBox().type(this.checkoutdata.firstName)
        checkoutPage.lastnameEditBox().type(this.checkoutdata.lastName)
        checkoutPage.zipcodeEditBox().type(this.checkoutdata.zipCode)
    })
})
    
