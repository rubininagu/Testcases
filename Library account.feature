Feature: As a Library member, I want to be able to see e-Books


Scenario: Customer is displayed with cumberlandlibrary.org landing page
Given I am on the cumberlandlibrary website
When I go to Kids button 

@Kidspage
Scenario: Customer is displayed with Kids list of items
Then I should see list of items

@e-Books&Audiobooks 
Scenario: Customer is displayed with e-Books&Audiobooks
When I click on e-Books&Audiobooks
Then I should see Kids books page

@Signin
Scenario: Customer is displayed with Sign in link
When I click on Sign in button
Then I should see Welcome! 
Then I should see Please sign in.
When I enter Card Number
Then I should enter PIN
And I click on Sign in button

@Books collection
Scenario: Customer is displayed with books collection
Then I should see the books collection 

