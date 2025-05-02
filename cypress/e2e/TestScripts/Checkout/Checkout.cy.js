/// <reference types="cypress"/>
import Home from "../../Pages/Home/Home";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/Checkout/Checkout";
describe('Cart test suite', () => {
    const home = new Home();
    const cart = new Cart();
    const checkout = new Checkout()
    let url;
    let validUsername;
    let validPassword;
    let firstname
    let lastname
    let postalcode
    let empty = ""
    let item = "Sauce Labs Backpack"
    before("before", () => {
        cy.fixture("Credentials.json").then((data) => {
            url = data[3].url
            validUsername = data[3].username;
            validPassword = data[3].password;
        })
        cy.fixture("checkout.json").then((data) => {
            firstname = data[0].first_name
            lastname = data[0].last_name;
            postalcode = data[0].postal;
        })
    })
    beforeEach("before each", () => {
        cy.login(url, validUsername, validPassword);
        home.clickInventoryItem(item);
        home.clickAddToCart();
        home.validateCartCount()
        home.clickCartIcon()
        cart.clickCheckout();
        cy.wait(3000)
    })
    it("Verify if user is able to see  checkout one  page.", () => {
        checkout.verifyCheckoutonePage();
    })
    it("Verify UI Elements of checkout one Page", () => {
        checkout.validateHeading();
        checkout.validateFirstnameField()
        checkout.validateLastNameField()
        checkout.validateZipField()
        checkout.validateCancelButton()
        checkout.validateContinueButton()
    })
    it("Verify mandatory check", () => {
        checkout.clickContinueButton()
        checkout.validateEmptyFirstErrorMEssage();
        checkout.enterFirstname(firstname)
        checkout.clickContinueButton()
        checkout.validateEmptyLastNAmeErrorMEssage();
        checkout.enterLastName(lastname)
        checkout.clickContinueButton()
        checkout.validateEmptyZipErrorMEssage();
    })
    it("Verify if user is able to cancel the checkout", () => {
        checkout.enterFirstname(firstname)
        checkout.enterLastName(lastname)
        checkout.enterZip(postalcode)
        checkout.clickCancelButton()
        cart.verifyCartPage()
    })
    it("Verify if user is able to checkout", () => {
        checkout.enterFirstname(firstname)
        checkout.enterLastName(lastname)
        checkout.enterZip(postalcode)
        checkout.clickContinueButton()
        checkout.verifyCheckouttwoPage()
        checkout.validateFinishButton()
        checkout.clickFinishButton()
        checkout.verifyCheckoutThreePage()
    })
})