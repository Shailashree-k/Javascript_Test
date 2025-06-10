//Accept the 2 numbers as input from user , add it dispaly the result in browser9

const { Builder, By } = require('selenium-webdriver');
const prompt = require('prompt-sync')({ sigint: true });

(async function addTwoNumbers() {
    // Accept input from the user
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    const sum = num1 + num2;

    // Initialize Selenium WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open a blank page
        await driver.get('data:text/html,<html><body><h1 id="result"></h1></body></html>');

        // Display the result on the webpage
        const script = `document.getElementById('result').innerText = 'The sum is: ${sum}';`;
        await driver.executeScript(script);

        console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    } finally {
        // Close the browser after a short delay
        setTimeout(() => driver.quit(), 5000);
    }
})();
