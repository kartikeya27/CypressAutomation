// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
Cypress.Commands.add('addProduct', () => {
    var productPrice = []
    cy.get('div.inventory_item_price').each($element => {
        productPrice.push($element.text());
    })
    //cy.log(accounts.sort)
    cy.wrap(productPrice).should("equal", productPrice.sort())
    cy.get('button.btn_primary.btn_inventory').eq(5).click()
    cy.get('button.btn_primary.btn_inventory').eq(4).click() 
})   

Cypress.Commands.add('removeProduct', () => {
    var cartItem = []
    cy.get('div.inventory_item_price').each($element => {
        cartItem.push($element.text());
    })
    cy.wrap(cartItem).should("equal", cartItem.sort())
    cy.get('button.btn_secondary.cart_button').eq(0).click()
})
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
