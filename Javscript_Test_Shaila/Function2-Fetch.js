const webdriver = require('selenium-webdriver');



async function fetchData() {
    try {
        const driver = new webdriver.Builder().forBrowser('chrome').build();
        const response = await fetch('https://www.google.com');
        await driver.sleep(1000) // Wait for the fetch to complete
        const data = await response.json();
        await driver.sleep(1000)// Wait for the response to be converted to JSON
        console.log(data); // Log the data
    } catch (error) {
        console.error('Error fetching data:', error); // Handle any errors
    }
}

fetchData();
// Call the async function


/* async function fetchData() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    const response = await fetch('https://test-login-app.vercel.app/');
    await driver.sleep(1000)
    const data = await response.json();
    await driver.sleep(1000)
    return data;
}
fetchData().then(data => console.log(data)); */