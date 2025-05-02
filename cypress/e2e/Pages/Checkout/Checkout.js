class Checkout
{
    verifyCheckoutonePage() {
        cy.url().should("include", "/checkout-step-one.html");
        cy.log("Verified Navigation to checkout first page");
    }
    verifyCheckouttwoPage() {
        cy.url().should("include", "/checkout-step-two.html");
        cy.log("Verified Navigation to checkout second page");
    }
    verifyCheckoutThreePage() {
        cy.url().should("include", "/checkout-complete.html");
        cy.log("Verified Navigation to checkout finish page");
    }
    validateHeading() {
        cy.get("[data-test='title']").should("exist");
        cy.get("[data-test='title']").should("have.text", "Checkout: Your Information");
    }
    validateFirstnameField() {
        cy.get("#first-name").should('exist');
    }
    validateLastNameField() {
        cy.get("#last-name").should("exist");
    }
    validateZipField() {
        cy.get("#postal-code").should("exist");
    }
    validateCancelButton() {
        cy.get("#cancel").should("exist");
    }
    validateContinueButton() {
        cy.get("#continue").should("exist");
    }
    validateFinishButton()
    {
        cy.get("#finish").should("exist");
    }
    enterFirstname(firstname) {
        cy.get("#first-name").type(firstname).should("have.value", firstname);
    }
    enterLastName(lastname) {
        cy.get("#last-name").type(lastname).should("have.value", lastname);
    }
    enterZip(Zip) {
        cy.get("#postal-code").type(Zip).should("have.value", Zip);
    }
    clickCancelButton() {
        cy.get("#cancel").click();
    }
    clickContinueButton() {
        cy.get("#continue").click();
    }
    clickFinishButton() {
        cy.get("#finish").click();
    }
    validateEmptyFirstErrorMEssage() {
        cy.contains("First Name is required").should("exist");
    }
    validateEmptyLastNAmeErrorMEssage() {
        cy.contains("Last Name is required").should("exist");
    }
    validateEmptyZipErrorMEssage() {
        cy.contains("Postal Code is required").should("exist");
    }
}
export default Checkout