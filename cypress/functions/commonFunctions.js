class commonFunctions {

    clickOn (button) {
        cy.get(button).should('be.visible').click()
    }

}

module.exports = new commonFunctions();