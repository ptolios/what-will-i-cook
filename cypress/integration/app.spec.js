/// <reference types="Cypress" />
describe("Home page", function () {
  it("Contains a header", function () {
    cy.visit("https://wwict.panostolios.dev")
    cy.get("header")
  })
  it("Contains a footer", function () {
    cy.get("footer")
  })
  it("Contains the correct title", function () {
    cy.contains("What will I cook today?")
  })
  it("Contains a search box", function () {
    cy.get(".v-form")
      .get("input")
      .get("button").contains("search")
  })
  it("Contains a 'Surprise Me!' button", function () {
    cy.get("button").contains("Surprise Me!")
  })
})

describe("'Surprise Me!' button", function () {
  it("Navigates to a random recipe", function () {
    cy.contains("Surprise Me!").click()
    cy.url().should("include", "/recipe/")
  })
})