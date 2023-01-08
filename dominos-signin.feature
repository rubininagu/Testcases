Feature: As a Dominos customer,I want to be able to navigate dominos landing page

@DominosSignin
Scenario: Customer is displayed with dominos.com landing page

Given I am on the Dominos website
When I click on SIGN IN & EARN REWARDS
Then I should see SIGN IN TO YOUR PIZZA PROFILE header