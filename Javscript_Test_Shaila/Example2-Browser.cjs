//This script opens the "Google.com" and searches for Title

/ *const webdriver = require('selenium-webdriver');

async function example() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        console.log('The title is: ', title);
    } finally {
        await driver.quit();
    }
}

example(); */

//This script opens the "Google.com" and searches for Title

/* const webdriver = require('selenium-webdriver');

async function example() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        console.log('The title is: ', title);
    } finally {
        await driver.quit();
    }
}

example();  */

const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser("chrome").build();

(async function amazonSearchExample() {

    try {
        await driver.get('https://www.amazon.com');

            const searchBox = await driver.findElement(By.id('twotabsearchtextbox'));

        await searchBox.sendKeys('Laptop', Key.RETURN);

        await driver.wait(until.titleContains('Laptop'), 5000);

    } finally {

        await driver.quit();

    }

})();

/* const { Builder, By, until } = require('selenium-webdriver');

const assert = require('assert');

async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('https://test-login-app.vercel.app/');

        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');

        await driver.findElement(By.id('password')).sendKeys('Password@12345');

        await driver.findElement(By.name('login')).click();

        const pageTitle = await driver.getTitle();

        await driver.wait(until.titleIs('Welcomepage'), 4000);

    } finally {

        await driver.quit();

    }
}

loginTest();  */

/* const { Builder, By } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com');
        console.log('Waiting for 2 seconds...');
        await driver.sleep(2000); // 2-second delay
        await driver.findElement(By.name('q')).sendKeys('Selenium');
        await driver.sleep(4000)
        // await driver.sleep(2000); // 2-second delay
    } finally {
        // await driver.quit();
    }
})();
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

