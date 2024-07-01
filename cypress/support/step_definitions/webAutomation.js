import googlePage from "../../pages/googlePage"
import wikiPage from "../../pages/wikiPage"

Given('the user is on Google page', () => {
    cy.visitGoogle()
})

And('the user searches for the word automation', () => {
    googlePage.googleSearchAutomation()
})

And('the user enters the link of the Wikipedia page', () => {
    wikiPage.checkWikipediaPage()
})

When('the user finds the year of the first automatic process', () => {
    wikiPage.findAutomaticProcess()
})

Then('a screenshot is made of the information found', () => {
    wikiPage.screenshot()
})
