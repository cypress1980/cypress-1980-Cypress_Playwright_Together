/// <reference types="cypress" />
describe("Verify Login/Logout And Tab functionality", () => {
    beforeEach(() => {
      cy.visit("https://testgrid.io/")
      cy.get('[title="Sign in"]').click()
      cy.get("#email").clear("jarryliurobert@gmail.com").type("jarryliurobert@gmail.com");
      cy.get("#password").clear().type("Test@1234");
      cy.get(".signin-button").click()
    });
    afterEach(() => {
      cy.get("[data-toggle='dropdown']").click();
      cy.contains("Logout").click();
      cy.contains("Forgot Password?");
    });
    it("Login and Click on 'Codeless' link Under Automation Section", function () {
      cy.contains('Dashboard')
      cy.get("#tgtestcase").click();
      cy.contains("Lets get you started with codeless automation");
    });
  });
  