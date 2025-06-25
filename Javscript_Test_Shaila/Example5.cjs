

//This programs opens google.com and cicks on link gmail in new tab
 const { Builder, By } = require('selenium-webdriver');

(async function openNewTab() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        let link = await driver.findElement(By.linkText('Gmail'));
        let href = await link.getAttribute('https://mail.google.com/mail/?tab=rm&ogbl');
        await driver.sleep(1000)
        await driver.executeScript(`window.open('${'https://mail.google.com/mail/?tab=rm&ogbl'}', '_blank');`);
        await driver.sleep(3000)
    } finally {
        await driver.quit();
    }
})();
