// Validate that login is failed

const { Builder, By, until } = require('selenium-webdriver');

 (async function validateLoginFailure() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.sleep(4000)
    try {
        // Navigate to the login page
        await driver.get('https://test-login-app.vercel.app/');

        // Enter incorrect login credentials
        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.sleep(500)
        await driver.findElement(By.id('password')).sendKeys('Passworld@12345');
        await driver.sleep(500)
        await driver.findElement(By.name('login')).click()
        await driver.sleep(2000)
        // Wait for the error message
        let errorElement = await driver.wait(until.elementLocated(By.className('MuiTypography-root MuiTypography-subtitle1 css-eh7hpo')), 5000);
        await driver.sleep(500)

        // Maximize the browser window
        await driver.manage().window().maximize();
        console.log('Browser window maximized.');
        await driver.sleep(1000)

        if (await errorElement.isDisplayed()) {
            console.log('Login failed: Invalid credentials.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
})();
