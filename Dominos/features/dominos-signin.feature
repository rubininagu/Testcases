Feature: As a Dominos customer,I want to be able to navigate dominos landing page

@DominosSignin @test
Scenario: Customer is displayed with dominos.com landing page
    Given I am on the Dominos website
    When I click on "Signin" 
    Then I should see "Signinpizza"