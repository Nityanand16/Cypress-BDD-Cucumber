Feature: Test the different features of the PayBills page

    Background: signin with valid credentials & click on paybills
        Given Load the Home Page
        When I Click the signin Button
        When Login with valid credentials
            | user     | pass     |
            | username | password |
        And Click on Submit button
        Then I should see login Page
        Then Click PayBills Page and Assert

    Scenario: Test all the Avalable Links at Pay Saved Payee
        When click at Payee & select the option
        And Click at Account and Select the Option
        And Click at Amount and Pass the Random number
        And Select the Date in Calender
        And At Description Pass the Random Message
        Then Click at Pay Button
        Then Assert the Alert Message
    
    Scenario: Add New Payee and Test all the Links
        When Click at Pay Bills Page and Assert
        And Click at Payee Name and pass the Random name
        And Click at Payee Address and Pass the Random Address
        And Click at Payee Account and Pass the Account
        And Click at the Payee Details and Pass the Payee Details
        Then Click at the Add Button and Add the Payee
        Then Confirm the Alert of Payee Created
    
    Scenario: Purchase Foreign Currency Page and test all the links
        When Click at Purchase Foreign Currency Page and Assert
        And Click at the Currency and Select from the Drop Down
        And Click at the Amount and Pass the Random Amount
        And Check the USD Radio Button, it should be visible and not checked
        And Check the Selected Currency Button, it shoud be visible and not checked
        And Click the Calculated Costs Button
        And Check the Conversion Amount Message
        Then lick at Purchase Button
        Then Assert Purchase Foreign Currency Alert
            
