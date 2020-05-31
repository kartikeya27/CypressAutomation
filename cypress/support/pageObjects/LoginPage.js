class LoginPage {
    getUsernameEditBox() {
        return cy.get('input[id="user-name"]')
    }

    getPasswordEditBox() {
        return cy.get('input[id="password"]')
    }

    getLoginButton() {
        return cy.get('input[type="submit"]')
    }

}

export default LoginPage;