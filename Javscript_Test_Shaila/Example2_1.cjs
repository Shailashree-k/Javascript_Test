// This program opens the browser and logs into the website with crdentials given
const { Builder, By, until } = require('selenium-webdriver');

const assert = require('assert');

async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('https://test-login-app.vercel.app/');
        await driver.sleep(1000)

        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.sleep(500)
        await driver.findElement(By.id('password')).sendKeys('Password@12345');
        await driver.sleep(500)
        await driver.findElement(By.name('login')).click();
        await driver.sleep(500)
        const pageTitle = await driver.getTitle();

        await driver.wait(until.titleIs('Welcomepage'), 4000);

    } finally {

        await driver.quit();

    }
}
loginTest();