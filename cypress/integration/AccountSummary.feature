Feature: Test the different features of the Account Summary page

    Background: signin with valid credentials
        Given Load the Home Page
        When I Click the signin Button
        When Login with valid credentials
            | user     | pass     |
            | username | password |
        And Click on Submit button
        Then I should see login Page

    Scenario: Test the Logout Button
        When Click on Username & Assert
        Then Click on Logout Button & Assert
        Then Come back to Home Page & Assert Logout
        
    