describe("template spec", () => {
  it("Login Sucsessful", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("admin");
    cy.get("#password").type("123456");
    cy.get("button").click();
    cy.get("#loginMessage").should("contain.text", "Login successful!");
  });
  it("Invalid UserName Password", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("admin1");
    cy.get("#password").type("12343");
    cy.get("button").click();
    cy.get("#loginMessage").should(
      "contain.text",
      "Invalid username or password"
    );
  });
  it("Contain Space on First Character", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type(" ");
    cy.get("#password").type("12343");
    cy.get("button").click();
    cy.get("#loginMessage").should(
      "contain.text",
      "Please enter both username and password"
    );
  });
  it("Null Username", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").clear();
    cy.get("#password").type("12343");
    cy.get("button").click();
    cy.get("#loginMessage").should(
      "contain.text",
      "Please enter both username and password"
    );
  });
});
