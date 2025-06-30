const { Builder, By, Key, until } = require('selenium-webdriver');

(async function scrollDown() {
    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open a website (you can replace the URL with your desired one)
        await driver.get('https://www.google.com/');
        await driver.sleep(2000)
        // Keep scrolling down the page
        let lastHeight = await driver.executeScript('return document.body.scrollHeight');
        while (true) {
            // Scroll down by a certain amount
            await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');

            // Wait for the page to load (adjust the delay as needed)
            await new Promise(resolve => setTimeout(resolve, 2000));
            await driver.sleep(1000)
            // Check if the page height has changed
            let newHeight = await driver.executeScript('return document.body.scrollHeight');
            if (newHeight === lastHeight) {
                break; // Exit the loop if no more content to load
            }
            lastHeight = newHeight;
        }
    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Keep the browser open (comment out the quit line)
        // await driver.quit();
    }
})();

