Feature: Test the different features of the Home Page

    Background: Page opload
        Given Load the Home Page
        When Assert the Home Page

    Scenario: verify the Online Banking Page
        When User click on Online Banking Page
        Then Assert the Online Banking Page

    Scenario: verify the Feedback Page
        When User click on Feedback Page
        Then Assert the Feedback Page

    Scenario: verify the Signin Button
        When I Click the signin Button
        Then Signin Page is open

    Scenario: verify the Search space
        When User click on Search space
        Then Assert the Search Page
    