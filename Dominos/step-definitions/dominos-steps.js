module.exports = function () {

    this.Given('I am on the Dominos website', function () {
        return helpers.loadPage(page.dominos.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.dominos.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.dominos.elementExists(objectKey);
    });
    
};
    
