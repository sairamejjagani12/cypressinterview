/// <reference types="cypress"/>
import Cart from "../../Pages/Cart/Cart"; 
import Home from "../../Pages/Home/Home";
describe('Cart test suite', () => {
    const home = new Home();
    const cart = new Cart();
    let url;
    let validUsername;
    let validPassword;
    let item = "Sauce Labs Backpack"
    before("before", () => {
        cy.fixture("Credentials.json").then((data) => {
            url = data[3].url
            validUsername = data[3].username;
            validPassword = data[3].password;
        })
    })
    beforeEach("before each", () => {
        cy.login(url, validUsername, validPassword);
        home.clickInventoryItem(item);
        home.clickAddToCart();
        home.validateCartCount()
        home.clickCartIcon()
    })
    it("Verify if user is able to see  CArt page.", () => {
        cart.verifyCartPage();
    })
    it("Verify UI Elements of Cart Page", () => {
        cart.validateHeading();
        cart.validateSideHeading();
        cart.validateInventoryItem(item);
        cart.validateRemove();
        cart.validateContinueShopping();
        cart.validateCheckout();
    })
    it("Verify if user is able to come back to shopping page.", () => {
       cart.clickContinueShopping()
    })
    it("Verify user is able to remove the inventory items from the cart", () => {
        home.clickRemove()
        home.validateCartCountNot()
     })
     it("Verify if user is able to navigate to checkout", () => {
        cart.clickCheckout();
    })
})