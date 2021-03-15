import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import feedbackPage from '../PageObjects/feedbackPage'


const randomName = `${Math.floor(Math.random() * 100) + 'Nitya'}`
const randomEmailId = `${Math.floor(Math.random() * 100) + 'Nitya' + '@gmail.com'}`
const randomtext = `${Math.floor(Math.random() * 100) + 'Cypress'}`


//Scenario: Test the Links at Feedback Page
When('Click at Frequentlly Asked Question Link & Assert', ()=>{
    feedbackPage.getFAQLink().click()
    feedbackPage.getFAQHeading().should('be.visible')
    .should('have.text','Frequently Asked Questions')
})
And('Come Back to Feedback Page', ()=>{
    cy.go('back')
})
And('Click at Your Name & write the Random name & Assert', ()=>{
    feedbackPage.getYourName().should('be.visible')
    .should('be.enabled').type(randomName)
})
And('Click at Your Email Address & write the Random Emmail Address & Assert', ()=>{
    feedbackPage.getYourEmailAddress().should('be.visible')
    .should('be.enabled').type(randomEmailId)
})
And('Click at Subject & Pass the Random Text & Assert', ()=>{
    feedbackPage.getSubject().should('be.visible')
    .should('be.enabled').type(randomtext)
})
And('Click at Type Your Questions Here & Pass the Random Text & Assert', ()=>{
    feedbackPage.getAskYourQuestionsHere().should('be.visible')
    .should('be.enabled').type(randomtext)
})
Then('Click at Send Message Button & Assert',()=>{
    feedbackPage.getSendMessage().should('be.enabled').click()
})
Then('Assert Customer Service Message', ()=>{
    feedbackPage.getCustomerServiceMessage().contains('Feedback')
    .should('be.visible').should('have.text','Feedback')
})

