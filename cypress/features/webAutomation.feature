Feature: Web automation

As a user, I want to search for the word “automation” on Google and get specific information from Wikipedia to make sure I know the historical details about the first automated process.

  Scenario: find the year of the first automatic process on wikipedia and take a screenshot
    Given user on Google page
    And user is redirected to wikipedia page after searching for automation
    When user finds the year of the first automatic process
    Then user user takes a screenshot of the wikipedia page


