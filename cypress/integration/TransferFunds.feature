Feature: Test the different features of the Transfer Funds page

    Background: signin with valid credentials
        Given Load the Home Page
        When I Click the signin Button
        When Login with valid credentials
            | user     | pass     |
            | username | password |
        And Click on Submit button
        Then I should see login Page
    
    Scenario: Move to Transfer Funds Page & test all the Links
        When Click at the Transfer Funds & Assert
        And Click & Select at From Account
        And Click & Select at To Account
        And Click at Amount & Pass the Random Amount
        And Click at Description & Pass the Random Text
        And Click at Continue Button
        And Assert the Verification Message
        Then Click at Submit Button
        Then Assert the Confirmation Message

