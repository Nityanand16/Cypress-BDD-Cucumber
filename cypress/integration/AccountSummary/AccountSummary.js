import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import common from '../PageObjects/common'
import accountSummaryPage from '../PageObjects/accountSummaryPage'




//Background steps are in CommonSteps.js

//Scenario: Test the Logout Button
When('Click on Username & Assert', ()=>{
    accountSummaryPage.getUsernameDropNDown().should('be.visible').click()
})
Then('Click on Logout Button & Assert', ()=>{
    accountSummaryPage.getLogoutSign().should('be.visible').click()
})
Then('Come back to Home Page & Assert Logout', ()=>{
    common.getHomePageheading().should('be.visible')
})
 
 