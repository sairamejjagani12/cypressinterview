class Home
{
    verifyHomePage() {
        cy.url().should("include", "/inventory.html");
        cy.log("Verified Navigation to Home page");
    }
    validateHeading() {
        cy.get("[data-test='title']").should("exist");
        cy.get("[data-test='title']").should("have.text", "Products");
    }
    validateMenuIcon()
    {
        cy.get("#react-burger-menu-btn").should("exist");
    }
    clickMenuIcon()
    {
        cy.get("#react-burger-menu-btn").should("exist");
        cy.get("#react-burger-menu-btn").click()
    }
    validateCartIcon()
    {
        cy.get("[data-test='shopping-cart-link']").should("exist");
    }
    clickCartIcon()
    {
        cy.get("[data-test='shopping-cart-link']").should("exist");
        cy.get("[data-test='shopping-cart-link']").click()
    }
    validateFilterIcon()
    {
        cy.get("[data-test='product-sort-container']").should("exist");
    }
    selectFilter(value)
    {
        cy.get("[data-test='product-sort-container']").should("exist");
        cy.get("[data-test='product-sort-container']").select(value);
    }
    filteritems()
    {
        cy.then(()=>{
            for(let i=0;i<4;i++)
            {
                cy.wait(2000)
                cy.get("[data-test='product-sort-container']").select(i); 
            }
        })
    }
    validateInventoryItem(item)
    {
        cy.contains(item).should("exist");
        cy.contains(item).should("have.text",item);
    }
    clickInventoryItem(item)
    {
        cy.contains(item).should("exist");
        cy.contains(item).click()
    }
    validateAddToCart()
    {
        cy.contains("Add to cart").should("exist");
        cy.contains("Add to cart").should("have.text","Add to cart");
    }
    clickAddToCart()
    {
        cy.contains("Add to cart").should("exist");
        cy.contains("Add to cart").click()
    }
    validateBackToProducts()
    {
        cy.contains("Back to products").should("exist");
        cy.contains("Back to products").should("have.text","Back to products");
    }
    clickBackToProducts()
    {
        cy.contains("Back to products").should("exist");
        cy.contains("Back to products").click()
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
    validateCartCount()
    {
        cy.get("[data-test='shopping-cart-link']>span").should("exist");
        cy.get("[data-test='shopping-cart-link']>span").should("have.text",1);
    }
    validateCartCountNot()
    {
        cy.get("[data-test='shopping-cart-link']>span").should("not.exist");
    }
}
export default Home