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
            .as('targetParagraph')
        })
    }

    screenshot () {
            cy.get('@targetParagraph').screenshot({overwrite : true})
        }
    }

module.exports = new wikiPage();