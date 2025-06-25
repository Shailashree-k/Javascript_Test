const webdriver = require('selenium-webdriver');

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

example();

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
})(); */
