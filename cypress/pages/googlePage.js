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
        })
    }
}

module.exports = new googlePage();