//This program opens the browser and searches for the selenium in that
const { Builder, By } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.udemy.com/');
        await driver.sleep(2000); // 2-second delay
        await driver.findElement(By.name('q')).sendKeys('Selenium');
        await driver.sleep(4000)
        // await driver.sleep(2000); // 2-second delay
    } finally {
        // await driver.quit();
    }
})();