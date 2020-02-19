Feature: Verify the functionality of bank manager

Scenario: As a manager I should be able to login to the system

Given I navigate to the url
When I login to as a manager
Then I should be able to see manager options


|validation1|validation2|validation3|
|Add Customer|Open Account| Customer|

# Scenario: As a Manager I should be able to add new customer.

# Given I navigate to the url
# When I login to as a manager
# When I click on addCusomer button
# Then I should be able to view the customer form
# When I enter "<FirstName>"
# When I enter "<LastName>"
# When I enter "<PostCode>"
# When I clik on add Customer
# Then I should be able to see successMessage

# |FirstName|LastName|PostCode|

# Scenario: As a Manager I should be able to open a new account.

# Given I navigate to the url
# When I login to as a manager
# When I click on Open account
# Then I should be able to select Customer "<Name>"
# Then I should be able to select Currency "<currency>"
# When I click on Process button
# Then I should be able to see successMessage

# |Name|currency|

# Scenario: As a manager I should be able to search for th ecustomer

# Given I navigate to the url
# When I login to as a manager
# When I click on Customer
# Then I should be able to see searchBar
# When I enter "<Customer Name>"
# Then I shoud be able to view the "<FirstName>" and "<LastName>"

# |Customer Name|FirstName|LastName|



