import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../PageObjects/homePage";
import signinPage from "../PageObjects/signinPage";
import accountSummaryPage from "../PageObjects/accountSummaryPage";

const randomEmailId = `${Math.floor(Math.random() * 100) + 'Nitya' + '@gmail.com'}`

//Background is in CommonSteps.js file

//Scenario: Check the login with valid credentials
//Steps are in CommonSteps.js

//Scenario: Check the login with invalid credentials
When("Login with invalid credentials", (datatable) => {
  datatable.hashes().forEach((el) => {
    signinPage.getLogin().type(el.user);
    signinPage.getPassword().type(el.pass);
  });
});
Then("I should see login failed message", () => {
  signinPage.getInvalidCredentialsAlert().should("be.visible");
});

//Scenario: Verify the Forgot Password Link
When("User click on Forget Password Link & Assert", () => {
  signinPage.getForgetPassword().should("be.visible").click();
});
And("User click on Email & Assert", () => {
  signinPage
    .getForgetPasswordEmail()
    .should("be.visible")
    .should("be.enabled")
    .type(randomEmailId);
});
Then("User click on Send Password Button & Assert", () => {
  signinPage.getFPSendPassword().should("be.visible").click();
});
Then("Alert Assert", () => {
  signinPage.getFPEmailSend().should("be.visible");
});
