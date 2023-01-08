const helpers = require("../runtime/helpers")

module.exports = function () {
    //Given I am on the dominos.com website
    this.Given ('I am on the Dominos website', function(){
        return 
        helpers.loadPage(page.dominos.urls)
    })
    // When I click on Sign In link
    this.When(/^I click on "([^"]*)" link$/, function(objectKey) {
        return
    page.dominos.clickElement(objectKey)
    })

    //Then I should see the Sign in header
    this.Then(/^I should see "([^"]*)"$/,
    function(objectKey) {
        return
        page.dominos.elementExists(objectKey)
    })
}
    
