class common {

    static loadhomepage(){
        return cy.visit('http://zero.webappsecurity.com/')
    }//baseurl is stored in env and called from cypress.json file
    
    static getHomePageheading(){
        return cy.get('a[class="brand"]')
    }
     
    static getHomePage(){
        return cy.go('back')
        //cy.get('.brand')
        //cy.get('a[class="brand"]')
    }

    static getAddNewPayee(){
        return cy.get('a[href="#ui-tabs-2"]')
    }

    static getPurchaseNewPayee(){
        return cy.get('a[href="#ui-tabs-3"]')
    }

    static getTransferFunds() {
        return cy.get('#transfer_funds_tab > a')
    }

    static getPayBills() {
        return cy.get('li[id="pay_bills_tab"]>a')
    }








}

export default common;
