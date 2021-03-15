import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import common from "../PageObjects/common";
import payBillsPage from "../PageObjects/payBillsPage";

const UniqueNumber = `${Math.floor(Math.random() * 100)}`;
const randomtext = `${Math.floor(Math.random() * 100) + 'Cypress'}`
const randomName = `${Math.floor(Math.random() * 100) + 'Nitya'}`
const randomAddress = `${Math.floor(Math.random() * 100) + 'Nitya, 2860, Gladsaxe, Denmark'}`

//Background: signin with valid credentials & click on paybills
Then("Click PayBills Page and Assert", () => {
  common.getPayBills().click();
  payBillsPage
    .getAssertPayBillsPage()
    .should("have.text", "Make payments to your saved payees");
});

//Scenario: Test all the Avalable Links at Pay Saved Payee
When("click at Payee & select the option", () => {
  payBillsPage.getPayee().select("Bank of America").should("have.value", "bofa");
});
And("Click at Account and Select the Option", () => {
  payBillsPage.getAccount().select("Checking").should("have.value", "2");
});
And("Click at Amount and Pass the Random number", () => {
  payBillsPage
    .getamount()
    .should("be.visible")
    .should("be.enabled")
    .type(UniqueNumber);
});
And("Select the Date in Calender", () => {
  payBillsPage.getDate().click().select;
  payBillsPage.getCalender().each(($el, index, $list) => {
    let datename = $el.text();
    if (datename == "14") {
      cy.wrap($el).click();
    }
  });
});
And('At Description Pass the Random Message', ()=>{
    payBillsPage.getDescription().should('be.visible')
    .should('be.enabled').type(randomtext)
})
Then('Click at Pay Button', ()=>{
    payBillsPage.getPayButton().should('be.visible').click()
})
Then('Assert the Alert Message', ()=>{
    payBillsPage.getAlertMessge().should('have.text','The payment was successfully submitted.')
})

//Scenario: Add New Payee and Test all the Links
When('Click at Pay Bills Page and Assert', ()=>{
    payBillsPage.getAddNewPayee().click()
        payBillsPage.getaddNewPayeePageheading().should('have.text','Who are you paying?')
})
And('Click at Payee Name and pass the Random name', ()=>{
    payBillsPage.getPayeeName().should('be.visible')
    .should('be.enabled').type(randomName)
})
And('Click at Payee Address and Pass the Random Address', ()=>{
    payBillsPage.getPayeeAddress().should('be.visible')
    .should('be.enabled').type(randomAddress)
})
And('Click at Payee Account and Pass the Account', ()=>{
    payBillsPage.getANPAccount().should('be.visible')
    .should('be.enabled').type(UniqueNumber)
})
And('Click at the Payee Details and Pass the Payee Details', ()=>{
    payBillsPage.getPayeeDetails().should('be.visible')
    .should('be.enabled').type(randomName)
})
Then('Click at the Add Button and Add the Payee', ()=>{
    payBillsPage.getAddButton().click()
})
Then('Confirm the Alert of Payee Created', ()=>{
    payBillsPage.getAlertConfirmation().contains('was successfully created.')
    .should('be.visible')
})

//Scenario: Purchase Foreign Currency Page and test all the links
When('Click at Purchase Foreign Currency Page and Assert', ()=>{
    payBillsPage.getPurchaseForeignCurrency().click()
    payBillsPage.getPurchaseForeignCurrencyheading().should('have.text','Purchase foreign currency cash')
})
And('Click at the Currency and Select from the Drop Down', ()=>{
    payBillsPage.getCurrency().select('Denmark (krone)').should('have.value','DKK')
})
And('Click at the Amount and Pass the Random Amount', ()=>{
    payBillsPage.getPFCAmount().should('be.visible')
    .should('be.enabled').type(UniqueNumber)
})
And('Check the USD Radio Button, it should be visible and not checked', ()=>(
    payBillsPage.getUSDRadiobutton().should('be.visible')
    .should('not.be.checked').click()
))
And('Check the Selected Currency Button, it shoud be visible and not checked', ()=>{
    payBillsPage.getSelectedCurrency().should('be.visible')
    .should('not.be.checked').click()
})
And('Click the Calculated Costs Button', ()=>{
    payBillsPage.getCalculateCostButton().should('be.visible').click()
})
And('Check the Conversion Amount Message', ()=>{
    payBillsPage.getConversionAmountMessage().contains('U.S. dollar (USD)')
    .should('be.visible')
})
Then('lick at Purchase Button', ()=>{
    payBillsPage.getPurchaseButton().should('be.visible').click()
})
Then('Assert Purchase Foreign Currency Alert', ()=>{
    payBillsPage.getPFCAlert().should('have.text','Foreign currency cash was successfully purchased.')
})

