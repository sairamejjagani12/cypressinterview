class Login
{
    navigateToLoginPage(url) {
        cy.visit(url);
        cy.log("Succsfully navigated to Login Page");
    }
    validateLoginPage() {
        cy.title().should("eq", "Swag Labs");
        cy.log("Login page title validates");
        cy.url().should("include", "https://www.saucedemo.com");
        cy.log("Login url validated");
    }
    validateUsernameField() {
        cy.get("#user-name").should('exist');
    }
    validatePasswordField() {
        cy.get("#password").should("exist");
    }
    validateLoginButton() {
        cy.get("#login-button").should("exist");
    }
    enterEmptyUsername(username) {
        cy.get("#user-name").type(username);
    }
    enterEmptyPassword(password) {
        cy.get("#password").type(password);
    }
    enterInvalidEmail(email) {
        cy.get("#user-name").type(email);
    }
    enterInvalidPassword(password) {
        cy.get("#password").type(password);
    }
    validateEmptyUsernameErrorMEssage(expected) {
        cy.contains("Username is required").should("contain", expected);
    }
    validateEmptyPasswordErrorMEssage(expected) {
        cy.contains("Password is required").should("contain", expected);
    }
    validateInvalidErrorMEssage(expected) {
        cy.contains("Username and password do not match any user in this service").should("contain", expected);
    }
    enterUsername(username) {
        cy.get("#user-name").type(username).should("have.value", username);
    }
    enterPassword(password) {
        cy.get("#password").type(password).should("have.value", password);
    }
    clickLoginButton() {
        cy.get("#login-button").click();
    }
    validateLoginSuccesfully()
    {
        cy.url().should("include", "/inventory.html");
    }
    clickLogoutButton() {
        cy.wait(3000)
        cy.get("#react-burger-menu-btn").click();
        cy.contains("Logout").click();
    }
}
export default Login