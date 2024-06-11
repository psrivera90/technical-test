import commonFunctions from "../functions/commonFunctions"
import googlePage from "../pages/googlePage"

Cypress.Commands.add('visitGoogle', () => {
  cy.fixture('dataWiki').then((data) => {
    cy.visit(data.Google_page)
    cy.title().should('eq', data.Google_title)
    commonFunctions.clickOn(googlePage.selectors.acceptCookies)
  })
})