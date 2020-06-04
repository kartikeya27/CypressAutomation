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
    })

    const loginPage = new LoginPage()
    const productPage = new ProductPage()   
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    it('Login Page Test Case', function() {
        cy.visit(Cypress.env('url'))
        loginPage.getUsernameEditBox().type(this.logindata.userName)
        loginPage.getPasswordEditBox().type(this.logindata.password)
        loginPage.getLoginButton().click()
    })

    it('Add & Remove Proudct Test Case', function() {
        productPage.productAssertion().should('have.text', 'Products')
        productPage.selectPrice().select('hilo')
        cy.addProduct()
        productPage.clickOnCart().click()
        cy.removeProduct()
    })

    it('Cart Test Case', function() {    
        cartPage.cartAssertion().should('have.text', 'Your Cart')    
        cartPage.clickOnCheckout().click() 
    })
    
    it('Checkout Test Case', function() { 
        checkoutPage.checkoutAssertion().should('have.text', 'Checkout: Your Information')    
    })
})
    
