class homePage{

    static getOnlineBankingPage(){
        return cy.get('#onlineBankingMenu > div')
    }

    static getFeedbackPage(){
        return cy.get('li[id="feedback"]')         
    }

    static signinButton(){
        return cy.get('#signin_button')
        //cy.get('button[id="signin_button"]')
    }

    static getSearch(){
        return cy.get('input[id=searchTerm]')   
    }

    
}

export default homePage;
