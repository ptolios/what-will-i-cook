/// <reference types="Cypress" />
describe("Home page", function () {
  it('is set up properly', function () {
    cy.visit('/')
    cy.get("header")
    cy.get("footer")
    cy.contains("What will I cook today?")
    cy.get(".v-form")
      .get("input")
      .get("button").contains("search")
    cy.contains("Surprise Me!")
  })
})

describe("'Surprise Me!' button", function () {
  it("navigates to a random recipe page", function () {
    cy.contains("Surprise Me!").click()
    cy.url().should("match", /recipe\//)
  })
})
