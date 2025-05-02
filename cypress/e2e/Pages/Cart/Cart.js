class Cart
{
    verifyCartPage() {
        cy.url().should("include", "/cart.html");
        cy.log("Verified Navigation to Cart page");
    }
    validateHeading() {
        cy.get("[data-test='title']").should("exist");
        cy.get("[data-test='title']").should("have.text", "Your Cart");
    }
    validateSideHeading() {
        cy.contains("QTY").should("exist");
        cy.contains("QTY").should("have.text", "QTY");
        cy.contains("Description").should("exist");
        cy.contains("Description").should("have.text", "Description");
    }
    validateInventoryItem(item)
    {
        cy.contains(item).should("exist");
        cy.contains(item).should("have.text",item);
    }
    validateRemove()
    {
        cy.contains("Remove").should("exist");
        cy.contains("Remove").should("have.text","Remove");
    }
    clickRemove()
    {
        cy.contains("Remove").should("exist");
        cy.contains("Remove").click()
    }
    validateContinueShopping()
    {
        cy.contains("Continue Shopping").should("exist");
        cy.contains("Continue Shopping").should("have.text","Continue Shopping");
    }
    clickContinueShopping()
    {
        cy.contains("Continue Shopping").should("exist");
        cy.contains("Continue Shopping").click()
    }
    validateCheckout()
    {
        cy.contains("Checkout").should("exist");
        cy.contains("Checkout").should("have.text","Checkout");
    }
    clickCheckout()
    {
        cy.contains("Checkout").should("exist");
        cy.contains("Checkout").click()
    }
    validateCartCount()
    {
        cy.get("[data-test='shopping-cart-link']>span").should("exist");
        cy.get("[data-test='shopping-cart-link']>span").should("have.text",1);
    }
}
export default Cart
