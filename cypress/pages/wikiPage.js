class wikiPage {

    checkWikipediaPage () {
        cy.fixture('dataWiki').then((data) => {
            cy.url().should('eq', data.Wiki_page)
        })
    }

    findAutomaticProcess () {
        cy.fixture('dataWiki').then((data) => {
            cy.get('p')
            .contains(data.Date_automation)
            .contains(data.Automated_process)
            .contains(data.Automated_keyword)
            .should('be.visible')
            .scrollIntoView()
        })
    }

    screenshot () {
        cy.screenshot({capture : 'viewport'})
    }
}

module.exports = new wikiPage();