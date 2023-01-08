//const{driver} = require("selenium-webdriver/chrome")

module.exports = {
    urls:'https://dominos.com/',

    elements:{
        Signin :
        "//*[@id="__next"]/header/div[1]/nav/ul[2]/li[1]/button" //Xpath for Signin link
        SigninHeader  :
        "//*[@id="modal-header-login-modal"]"
    },

    clickElement: async function(objectKey)
    {
        var selector =
        page.dominos.elements[objectKey];
        await driver.sleep(3000);
        return
        driver.findElement(By.xpath(selector)).click();
    },
    elementExists:async
    function(objectKey) {
        var selector =
        page.dominos.elements[objectKey];
        await driver.sleep(3000);
        return
        driver.findElement(By.xpath(selector));
    }
    }
