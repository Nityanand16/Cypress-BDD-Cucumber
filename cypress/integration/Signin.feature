Feature: Signin with Valid and Invalid Credentials and Assert

    Background: Page opload
        Given Load the Home Page
        When Assert the Home Page
        When I Click the signin Button
        Then Signin Page is open

    Scenario: Check the login with valid credentials

        When Login with valid credentials
            | user     | pass     |
            | username | password |
        And Click on Submit button
        Then I should see login Page

    Scenario: Check the login with invalid credentials

        When Login with invalid credentials
            | user        | pass            |
            | userinvalid | passwordinvalid |
        And Click on Submit button
        Then I should see login failed message

    Scenario: Verify the Forgot Password Link

        When User click on Forget Password Link & Assert
        And User click on Email & Assert
        Then User click on Send Password Button & Assert
        Then Alert Assert
