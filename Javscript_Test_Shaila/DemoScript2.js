// Verify the "remember me"  option in browser login
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function Verifyremember() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://test-login-app.vercel.app/');
        await driver.sleep(1000)

        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.sleep(500)
        await driver.findElement(By.id('password')).sendKeys('Password@12345');
        await driver.sleep(500)
        //Click on remember me option
        let checkbox = await driver.findElement(By.css('input[type="checkbox"][value="remember"]'))
        await checkbox.click()
        await driver.sleep(1000)
        //Click on Login
        await driver.findElement(By.name('login')).click();
        await driver.wait(until.titleIs('Welcomepage'), 4000);
        await driver.sleep(1000)
        //Click on Logout
        let Button = await driver.findElement(By.xpath('//button[text()="Click to logout"]'));
        await Button.click()
        await driver.sleep(2000)
        //Maximize the Login page
        await driver.manage().window().maximize();
        await driver.sleep(2000)
        //Again click on login
        await driver.findElement(By.name('login')).click();
        await driver.sleep(1000)

        // Wait for the result (success or failure message)
        const pageTitle4 = await driver.getTitle();
        if (pageTitle4.includes('Welcomepage'))

        {
            console.log('Login successful!');
        }
        else {
            console.log('Login failed!');
        }
    }  finally {
        // Quit the driver
        await driver.quit();
    }
};
Verifyremember()