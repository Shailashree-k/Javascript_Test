//This programs opens google.com and cicks on link gmail
const { Builder, By, Key } = require('selenium-webdriver');

(async function openNewTab() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        // let link = await driver.findElement(By.linkText('Gmail'));
        await driver.findElement(By.linkText('Gmail')).click();
        await driver.sleep(1000)
    } finally {
        await driver.quit();
    }
})();
