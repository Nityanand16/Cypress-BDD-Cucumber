import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from '../PageObjects/homePage'
import onlineBankingPage from '../PageObjects/onlineBankingPage'
import feedbackPage from '../PageObjects/feedbackPage'
import signinPage from '../PageObjects/signinPage'

//Scenario: verify the Online Banking Page
When('User click on Online Banking Page', ()=>{
    homePage.getOnlineBankingPage().click();
})
Then('Assert the Online Banking Page', ()=>{
    onlineBankingPage.getOBheading().should("be.visible")
    .contains("Online Banking").and("have.text", "Online Banking");
})

//Scenario: verify the Feedback Page
//Steps are in Common Steps.

//Scenario: verify the Signin Button.
//Steps are in Common Steps.

//Scenario: verify the Search space
When('User click on Search space', ()=>{
    homePage.getSearch().should("be.visible")
      .should("be.enabled").clear().type("zero{enter}");
})
Then('Assert the Search Page', ()=>{
    cy.contains("Zero - FAQ - Frequently Asked Questions").should(
        "have.text",
        "Zero - FAQ - Frequently Asked Questions")
}) 
