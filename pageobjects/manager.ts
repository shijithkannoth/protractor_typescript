import { ElementFinder, element, by } from "protractor";

export class manager{

    managerbutton:ElementFinder
    addCustomer:ElementFinder
    openAccount:ElementFinder
    customers:ElementFinder
    firstName:ElementFinder
    lastName:ElementFinder
    postCode:ElementFinder
    selectCustomer:ElementFinder
    selectCurrency:ElementFinder
    processButton:ElementFinder
    searchCustomer:ElementFinder

    constructor (){

        this.managerbutton = element(by.buttonText('Bank Manager Login'))
        this.addCustomer = element(by.buttonText('Add Customer'))
        this.openAccount = element(by.buttonText('Open Account'))
        this.customers = element(by.buttonText('Customers'))
        this.firstName = element(by.model('fName'))
        this.lastName = element(by.model('lName'))
        this.postCode = element(by.model('postCd'))
        this.selectCustomer = element(by.id('userSelect'))
        this.selectCurrency = element(by.id('currency'))
        this.processButton = element(by.buttonText('Process'))
        this.searchCustomer = element(by.model('searchCustomer'))
    }
}



		