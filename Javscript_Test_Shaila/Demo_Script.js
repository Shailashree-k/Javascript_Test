//Verify the login scenario with valid credentials

/* const { Builder, By, until } = require('selenium-webdriver');

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
       console.log('Login successful!');

   } catch (error) {
       console.error('Login failed or an error occurred:', error);
   } finally {
       await driver.quit();
   } }
loginTest(); */

// Validate that login is failed by entering the invalid password

/* const { Builder, By, until } = require('selenium-webdriver');

(async function validateLoginFailure() {
   let driver = await new Builder().forBrowser('chrome').build();
   await driver.sleep(4000)
   try {
       // Navigate to the login page
       await driver.get('https://test-login-app.vercel.app/');

       // Enter incorrect login credentials
       await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
       await driver.sleep(500)
       await driver.findElement(By.id('password')).sendKeys('wrongPassword');
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
*/

//Verify Logout

const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function logout() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://test-login-app.vercel.app/');
        await driver.sleep(1000)
        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.sleep(500)
        await driver.findElement(By.id('password')).sendKeys('Password@12345');
        await driver.sleep(500)
        await driver.findElement(By.name('login')).click();
        const pageTitle = await driver.getTitle();
        await driver.wait(until.titleIs('Welcomepage'), 4000);
        await driver.sleep(2000)
        let Button = await driver.findElement(By.xpath('//button[text()="Click to logout"]'));
        await Button.click()
        await driver.sleep(1000)
        //    const Title1 = await driver.getTitle();
        //Validate that logout is succcessful be verifying the page title
        await driver.wait(until.titleIs('TestLogin'), 4000);
        console.log('Logout is successful!');

    } finally {
        await driver.quit();
    }
};
logout();