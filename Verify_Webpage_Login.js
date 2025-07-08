//This script validates the login scenarios of webpage
//TC:1 -Verify the login scenario with valid credentials
const { Builder, By, until } = require('selenium-webdriver');
async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
 //   await driver.sleep(500)
    try {
        await driver.get('https://test-login-app.vercel.app/');
        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('Password@12345');
        await driver.findElement(By.name('login')).click();
        const pageTitle = await driver.getTitle();
        await driver.wait(until.titleIs('Welcomepage'));
        console.log('TestCase1 :Login is successful!');

    } catch (error) {
        console.error('TestCase:1 Login failed or an error occurred:', error);
    } finally {
        await driver.quit();
    } } ;

// Validate that login is failed by entering the invalid password
async function validateLoginFailure() {
    let driver = await new Builder().forBrowser('chrome').build();
   try {
       // Navigate to the login page
       await driver.get('https://test-login-app.vercel.app/');
       // Enter incorrect login credentials
       await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
       await driver.findElement(By.id('password')).sendKeys('wrongPassword');
       await driver.findElement(By.name('login')).click()
       // Maximize the browser window
       await driver.manage().window().maximize();
       // Wait for the error message
       let errorElement = await driver.wait(until.elementLocated(By.className('MuiTypography-root MuiTypography-subtitle1 css-eh7hpo')), 5000);
      // await driver.sleep(500)
       await driver.sleep(200)
       if (await errorElement.isDisplayed()) {
           console.log('Testcase2 Login failed: Invalid credentials.');
       }
   } catch (error) {
       console.error('An error occurred:', error);

   } finally {
       await driver.quit();
   }} ;

//Verify Logout
async function logout() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://test-login-app.vercel.app/');
       // await driver.sleep (500)
        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
      //  await driver.sleep(500)
        await driver.findElement(By.id('password')).sendKeys('Password@12345');
    //    await driver.sleep(500)
        await driver.findElement(By.name('login')).click();
        const pageTitle = await driver.getTitle();
        await driver.wait(until.titleIs('Welcomepage'));
     //   await driver.sleep(1000)
        let Button = await driver.findElement(By.xpath('//button[text()="Click to logout"]'));
        await Button.click()
     //   await driver.sleep(1000)
        await driver.wait(until.titleIs('TestLogin'));
        console.log('TestCase3 Logout is successful!');
       // await driver.sleep(1000)
    } finally {
        await driver.quit();
    } } ;
//Verify the remember me option
async function Verifyremember() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://test-login-app.vercel.app/');
        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('Password@12345');
        //Click on remember me option
        let checkbox = await driver.findElement(By.css('input[type="checkbox"][value="remember"]'))
        await checkbox.click()
       // await driver.sleep(500)
        //Click on Login
        await driver.findElement(By.name('login')).click();
        await driver.wait(until.titleIs('Welcomepage'));
       // await driver.sleep(1000)
        //Click on Logout
        let Button = await driver.findElement(By.xpath('//button[text()="Click to logout"]'));
        await Button.click()
        await driver.sleep(500)
        //Maximize the Login page
        await driver.manage().window().maximize();
        //Again click on login
        await driver.findElement(By.name('login')).click();
        // Wait for the result (success or failure message)
        const pageTitle4 = await driver.getTitle();
        if (pageTitle4.includes('Welcomepage'))

        {
            console.log('Test case4-Login successful!, Remember me worked');
        }
        else {
            console.log('Test cases4-Login failed!, Remember me not working');
        }
    }  finally {
        // Quit the driver
        await driver.quit();
    } } ;

loginTest()
validateLoginFailure()
logout()
Verifyremember()