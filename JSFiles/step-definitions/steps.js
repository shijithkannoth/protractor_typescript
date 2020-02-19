"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const manager_1 = require("../pageobjects/manager");
let man = new manager_1.manager();
cucumber_1.Given('I navigate to the url', function () {
    // Write code here that turns the phrase above into concrete actions
    //browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    protractor_1.browser.get('https://www.traveldoc.aero/');
});
cucumber_1.When('I login to as a manager', function () {
    man.managerbutton.click();
});
cucumber_1.Then('I should be able to see manager options', function () {
    // Write code here that turns the phrase above into concrete actions
    expect(man.addCustomer.isDisplayed()).toBe(true);
    expect(man.openAccount.isDisplayed()).toBe(true);
    expect(man.customers.isDisplayed()).toBe(true);
});
cucumber_1.When('I click on addCusomer button', function () {
    man.addCustomer.click();
});
cucumber_1.Then('I should be able to view the customer form', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('I enter {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('I clik on add Customer', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('I should be able to see successMessage', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('I click on Open account', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('I should be able to select Customer {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('I click on Process button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('I should be able to see successMessage', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('I click on Customer', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('I should be able to see searchBar', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('I shoud be able to view the {string} and {string}', function (string, string2, dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwLWRlZmluaXRpb25zL3N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQyxvREFBOEM7QUFFOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUE7QUFFdkIsZ0JBQUssQ0FBQyx1QkFBdUIsRUFBRTtJQUMzQixvRUFBb0U7SUFDcEUsbUZBQW1GO0lBQ25GLG9CQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUE7QUFFOUMsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUJBQXlCLEVBQUU7SUFDNUIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRTtJQUM1QyxvRUFBb0U7SUFDckUsTUFBTSxDQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakQsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUU7SUFDbEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtBQUMxQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0Q0FBNEMsRUFBRTtJQUMvQyxvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNO0lBQ3JDLG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRTtJQUMzQixvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxTQUFTO0lBQzlELG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUVyQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRTtJQUM1QixvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOENBQThDLEVBQUUsVUFBVSxNQUFNO0lBQ2pFLG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRTtJQUM5QixvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxTQUFTO0lBQzlELG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxQkFBcUIsRUFBRTtJQUN4QixvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7SUFDdEMsb0VBQW9FO0lBQ3BFLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1EQUFtRCxFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTO0lBQzFGLG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQyJ9