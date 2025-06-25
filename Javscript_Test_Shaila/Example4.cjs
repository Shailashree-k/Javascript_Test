
//This programs searches by Classname and enters the Txt into it
const { Builder, By, Key, until } = require('selenium-webdriver');


(async function clickButtonByClassName() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        const button = await driver.findElement(By.className('gLFyf'));
     //   await button.click();
        await driver.sleep(1000)
        await button.sendKeys('Laptop', Key.RETURN);
    } finally {
        await driver.quit();
    }
})();