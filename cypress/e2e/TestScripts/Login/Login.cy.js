/// <reference types="cypress"/>
import Login from "../../Pages/Login/Login";
describe('Entity Login test suite', () => {
    const login = new Login();
    let url;
    let emptyUsername;
    let emptyUsernamePassword;
    let emptyUsernameError;
    let emptyPasswordUsername;
    let emptyPassword;
    let emptyPasswordError;
    let invalidUsername;
    let invalidPassword;
    let validUsername;
    let validPassword;
    let errorMEssage;
    before("before", () => {
        cy.fixture("Credentials.json").then((data) => {
            url = data[3].url
            emptyUsername = data[0].username;
            emptyUsernamePassword = data[0].password;
            emptyUsernameError = data[0].message;
            emptyPasswordUsername = data[1].username;
            emptyPassword = data[1].password;
            emptyPasswordError = data[1].message;
            invalidUsername = data[2].username;
            invalidPassword = data[2].password;
            validUsername = data[3].username;
            validPassword = data[3].password;
            errorMEssage = data[2].message;
            cy.then("test data", () => {
                console.log(validUsername);
                console.log(validPassword);
            })
        })
    })
    beforeEach("before each", () => {
        login.navigateToLoginPage(url);
    })
    it("Verify if user is able to see  Login page.", () => {
        login.navigateToLoginPage(url);
        login.validateLoginPage();
    })
    it("Verify the UI elements in Login page", () => {
        login.validateUsernameField();
        login.validatePasswordField();
        login.validateLoginButton();
    })
    it("Verify if Username  is mandatory.", () => {
        login.enterEmptyUsername(emptyUsername+"{Enter}")
        login.enterPassword(emptyUsernamePassword);
        cy.wait(3000);
        login.validateEmptyUsernameErrorMEssage(emptyUsernameError);
    })
    it("Verify if  Password  is mandatory.", () => {
        login.enterUsername(emptyPasswordUsername);
        login.enterEmptyPassword(emptyPassword + "{Enter}")
        cy.wait(3000);
        login.validateEmptyPasswordErrorMEssage(emptyPasswordError);
    })
    it("Verifyn the Login with invalid username and  password.", () => {
        login.enterUsername(invalidUsername);
        login.enterPassword(invalidPassword);
        login.clickLoginButton();
        login.validateInvalidErrorMEssage(errorMEssage);
    })
    it('Verify the Login with valid credentials.', () => {
        login.validateUsernameField();
        login.enterUsername(validUsername);
        login.validatePasswordField();
        login.enterPassword(validPassword);
        login.validateLoginButton();
        login.clickLoginButton();
        login.validateLoginSuccesfully()
    })
    it("Verify the Logout of user.", () => {
        login.validateUsernameField();
        login.enterUsername(validUsername);
        login.validatePasswordField();
        login.enterPassword(validPassword);
        login.validateLoginButton();
        login.clickLoginButton();
        login.clickLogoutButton();
    })
})
