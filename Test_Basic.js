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