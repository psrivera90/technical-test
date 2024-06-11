class googlePage {

    constructor() {
        this.selectors = {
            acceptCookies : '#L2AGLb > .QS5gu',
            googleLabel : '#APjFqb',
            divSearch : '#rcnt'
        }
    }

    googleSearchAutomation () {
        cy.fixture('dataWiki').then((data) => {
            cy.get(this.selectors.googleLabel).should('be.visible').type(data.Automation + '{enter}')
            cy.wait(4000)
            cy.get(this.selectors.divSearch).find('a').contains(data.Wikipedia).click()
        })
    }
}

module.exports = new googlePage();