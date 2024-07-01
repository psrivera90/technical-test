Feature: Web automation

As a user, I want to search for the word “automation” on Google and get specific information from Wikipedia to make sure I know the historical details about the first automated process.

  Scenario: find the year of the first automatic process on wikipedia and take a screenshot
    Given the user is on Google page
    And the user searches for the word automation 
    And the user enters the link of the Wikipedia page
    When the user finds the year of the first automatic process
    Then a screenshot is made of the information found


