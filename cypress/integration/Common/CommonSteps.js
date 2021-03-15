import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import common from '../PageObjects/common'
import homePage from '../PageObjects/homePage'
import signinPage from '../PageObjects/signinPage'
import accountSummaryPage from '../PageObjects/accountSummaryPage'
import feedbackPage from '../PageObjects/feedbackPage'

Given("Load the Home Page", () => {
  common.loadhomepage();
});
When("Assert the Home Page", () => {
  common.getHomePageheading().should("be.visible");
});

When("I Click the signin Button", () => {
  homePage.signinButton().click();
});
Then("Signin Page is open", () => {
  signinPage.getSignInheading().should("be.visible");
});

When("Login with valid credentials", (datatable) => {
  datatable.hashes().forEach((el) => {
    signinPage.getLogin().type(el.user);
    signinPage.getPassword().type(el.pass);
  });
});
And("Click on Submit button", () => {
  signinPage.getSubmit().click();
});
Then("I should see login Page", () => {
  accountSummaryPage.getAccountSummaryheading().should("be.visible");
  cy.url().should("include", "account");
});
//Scenario: verify the Feedback Page
When('User click on Feedback Page', ()=>{
  homePage.getFeedbackPage().click();
})
Then('Assert the Feedback Page', ()=>{
  feedbackPage.getFBheading().should("be.visible")
  .contains("Feedback").and("have.text", "Feedback");
})









