import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import {manager} from '../pageobjects/manager'

let man = new manager()

Given('I navigate to the url', function () {
    // Write code here that turns the phrase above into concrete actions
    //browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    browser.get('https://www.traveldoc.aero/')

});

When('I login to as a manager', function () {
    man.managerbutton.click()
});

Then('I should be able to see manager options', function() {
    // Write code here that turns the phrase above into concrete actions
   expect (man.addCustomer.isDisplayed()).toBe(true)
   expect(man.openAccount.isDisplayed()).toBe(true)
   expect(man.customers.isDisplayed()).toBe(true)
});

When('I click on addCusomer button', function () {
   man.addCustomer.click()
});

Then('I should be able to view the customer form', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I enter {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I clik on add Customer', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be able to see successMessage', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';

});

When('I click on Open account', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be able to select Customer {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click on Process button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be able to see successMessage', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click on Customer', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be able to see searchBar', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I shoud be able to view the {string} and {string}', function (string, string2, dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});