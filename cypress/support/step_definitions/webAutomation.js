import googlePage from "../../pages/googlePage"
import wikiPage from "../../pages/wikiPage"

Given('user on Google page', () => {
    cy.visitGoogle()
})

And('user is redirected to wikipedia page after searching for automation', () => {
    googlePage.googleSearchAutomation()
    wikiPage.checkWikipediaPage()
})

When('user finds the year of the first automatic process', () => {
    wikiPage.findAutomaticProcess()
})

Then('user user takes a screenshot of the wikipedia page', () => {
    wikiPage.screenshot()
})
