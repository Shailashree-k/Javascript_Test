const { Builder, By, Key, until } = require('selenium-webdriver');

// Function to initialize the WebDriver
async function initializeDriver() {
    let driver = await new Builder().forBrowser('chrome').build();
    return driver;
}

// Function to perform a Google search
async function performGoogleSearch(driver, searchQuery) {
    try {
        // Navigate to Google's homepage
        await driver.get('https://www.google.com');

        // Find the search bar, enter the query, and press Enter
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys(searchQuery, Key.RETURN);

        // Wait for the results page to load
        await driver.wait(until.titleContains(searchQuery));
        await driver.sleep(1000)
        console.log('Search completed successfully!');
    } catch (error) {
        console.error('Error during search:', error);
    }
}

// Main function to execute the program
async function main() {
    let driver = await initializeDriver();
    try {
        await performGoogleSearch(driver, 'Selenium WebDriver');
    } finally {
        // Quit the browser
        await driver.quit();
    }
}

// Run the main function
main();