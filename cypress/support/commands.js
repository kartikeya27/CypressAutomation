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
Cypress.Commands.add('addProduct', (productName1,productName2) => { 
    cy.get('div.inventory_item_price').each(($element, index, $list) => {
        if($element.text().includes(productName1)) {
            cy.get('button.btn_primary.btn_inventory').eq(index).click()
            //cy.get('button.btn_primary.btn_inventory').eq(index).click()
        }
        if($element.text().includes(productName2)) {
            cy.get('button.btn_primary.btn_inventory').eq(index-1).click()
        }
    }) 
})

Cypress.Commands.add('removeProduct', (product) => {
    cy.get('div.inventory_item_price').each(($element, index, $list) => {
        if($element.text().includes(product)) {
            cy.get('button.btn_secondary.cart_button').eq(index).click()
        }
    })
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
