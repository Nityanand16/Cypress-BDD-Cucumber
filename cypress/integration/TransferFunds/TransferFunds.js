import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import common from '../PageObjects/common'
import transferFundsPage from '../PageObjects/transferFundsPage'


const UniqueNumber = `${Math.floor(Math.random() * 100)}`
const randomtext = `${Math.floor(Math.random() * 100) + 'Cypress'}`

//Background is at the CommonSteps.js

//Scenario: Move to Transfer Funds Page & test all the Links
When('Click at the Transfer Funds & Assert', ()=>{
    common.getTransferFunds().click()
    transferFundsPage.getTFPageheading().should('be.visible')
})
And('Click & Select at From Account', ()=>{
    transferFundsPage.getFromAccount().select('3')
})
And('Click & Select at To Account', ()=>{
    transferFundsPage.getToAccount().select('Loan(Avail. balance = $ 780)').should('have.value','4')
})
And('Click at Amount & Pass the Random Amount', ()=>{
    transferFundsPage.getAmount().should('be.visible')
    .should('be.enabled').type(UniqueNumber)
})
And('Click at Description & Pass the Random Text', ()=>{
    transferFundsPage.getDescription().should('be.visible')
    .should('be.enabled').type(randomtext)
})
And('Click at Continue Button', ()=>{
    transferFundsPage.getContinueButton().should('be.visible').click()
})
And('Assert the Verification Message', ()=>{
    transferFundsPage.getVerificationMessage().should('have.text','Transfer Money & Make Payments - Verify')
})
Then('Click at Submit Button', ()=>{
    transferFundsPage.getSubmitButton().should('be.visible').click()
})
Then('Assert the Confirmation Message', ()=>{
    transferFundsPage.getConfirmationMessage().should('have.text','Transfer Money & Make Payments - Confirm')
})




