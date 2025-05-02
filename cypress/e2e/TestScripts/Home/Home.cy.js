/// <reference types="cypress"/>
import Home from "../../Pages/Home/Home";
describe('Entity Login test suite', () => {
    const home = new Home();
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
    })
    it("Verify if user is able to see  home page.", () => {
        home.verifyHomePage();
    })
    it("Verify UI Elements of Home Page", () => {
        home.validateHeading();
        home.validateMenuIcon();
        home.validateCartIcon();
        home.validateFilterIcon();
        home.validateInventoryItem(item);
        home.validateAddToCart();
        home.clickInventoryItem(item);
        home.validateBackToProducts();
        home.clickAddToCart();
        home.validateRemove()
        home.clickRemove()
    })
    it("Verify filtering the inventory items ", () => {
       home.filteritems()
    })
    it("Verify user is able to add the inventory items to the cart", () => {
        home.clickInventoryItem(item);
        home.clickAddToCart();
        home.validateCartCount()
     })
     it("Verify user is able to remove the inventory items from the cart", () => {
        home.clickInventoryItem(item);
        home.clickAddToCart();
        home.clickRemove()
        home.validateCartCountNot()
     })
})