import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from '../PageObjects/homePage'
import onlineBankingPage from '../PageObjects/onlineBankingPage'

//Background is in the CommonSteps.js file

//Scenario: Move to Online Banking Page
When('Click at the Online Banking', ()=>{
    homePage.getOnlineBankingPage().click()
})
Then('Assert the Online Banking Page', ()=>{
    onlineBankingPage.getOBheading().should('be.visible')
    .contains('Online Banking')
    .and('have.text','Online Banking')
})










