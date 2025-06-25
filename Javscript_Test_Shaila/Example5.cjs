//This programs opens google.com and cicks on link gmail

/*const { Builder, By, Key } = require('selenium-webdriver');

(async function openNewTab() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        // let link = await driver.findElement(By.linkText('Gmail'));
        await driver.findElement(By.linkText('Gmail')).click();
        await driver.sleep(500)
    } finally {
        await driver.quit();

    }
})(); */

//This programs opens google.com and cicks on link gmail in new tab
/* const { Builder, By } = require('selenium-webdriver');

(async function openNewTab() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        let link = await driver.findElement(By.linkText('Gmail'));
        await driver.sleep(1000)
        let href = await link.getAttribute('https://mail.google.com/mail/?tab=rm&ogbl');
        await driver.sleep(1000)
        await driver.executeScript(`window.open('${'https://mail.google.com/mail/?tab=rm&ogbl'}', '_blank');`);
        await driver.sleep(2000)
    } finally {
        await driver.quit();
    }
})(); */
//This programs opens google.com and cicks on link gmail using Click + control
const { Builder, By, Key, Actions } = require('selenium-webdriver');

(async function openNewTab() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        let link = await driver.findElement(By.linkText('Gmail'));
        await driver.sleep(1000)
        let actions = driver.actions({ async: true });
        await actions.keyDown(Key.CONTROL).click(link).keyUp(Key.CONTROL).perform(); // Use Key.COMMAND for Mac
    } finally {
        await driver.quit();
    }
})();
