Feature: Test the different features of the feedback page

    Background: Page opload, click and assert feedback page
        Given Load the Home Page
        When Assert the Home Page
        When User click on Feedback Page
        Then Assert the Feedback Page 
    
    Scenario: Test the Links at Feedback Page
        When Click at Frequentlly Asked Question Link & Assert
        And Come Back to Feedback Page
        And Click at Your Name & write the Random name & Assert
        And Click at Your Email Address & write the Random Emmail Address & Assert
        And Click at Subject & Pass the Random Text & Assert
        And Click at Type Your Questions Here & Pass the Random Text & Assert
        Then Click at Send Message Button & Assert
        Then Assert Customer Service Message
        
    