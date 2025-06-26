const { Builder, By } = require('selenium-webdriver');

(async function browserOperations() {
    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open a website
        await driver.get('https://www.google.com');
        await driver.sleep(1000)

        // Maximize the browser window
        await driver.manage().window().maximize();
        console.log('Browser window maximized.');
        await driver.sleep(1000)

        // Refresh the browser
        await driver.navigate().refresh();
        console.log('Browser refreshed.');
        await driver.sleep(1000)

        // Minimize the browser window
        await driver.manage().window().minimize();
        console.log('Browser window minimized.');

        await driver.sleep(1000)

        // Wait for a few seconds to observe the operations
        await driver.sleep(3000);
    } finally {
        // Quit the browser
        await driver.quit();
    }
})();