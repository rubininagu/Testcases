const { assert } = require("chai");
const helpers = require("../../../clt-bdd-ui/runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.dominos.com/',

    elements: {
        Signin: '//*[@id="__next"]/header/div[1]/nav/ul[2]/li[1]/button',
        Signinpizza: '//*[@id="modal-header-login-modal"]',

    },

    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.dominos.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.dominos.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
};

