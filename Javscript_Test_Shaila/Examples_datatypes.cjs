//This script is used to check diferrent type datatypes

console.log(NaN === NaN); // false
// To check if a value is NaN, use Number.isNaN():
// Copy the code
console.log(Number.isNaN(NaN)); // true
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1));
console.log(Number("abc")); // NaN
console.log(parseInt("xyz"))

let name = "Java script";
console.log("String:", name);

// 2. Number
let age = 25;
console.log("Number:", age);

// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent);

{
    let x = 10;
    console.log(x); // 10
}
//console.log(x); //

let a = 50;
a = 60; // Valid
console.log(a);

let name1 = "Alice";
if (true) {
    let name1 = "Bob"; // This is a different variable due to block scope
    console.log(name1); // Bob
}
 console.log(name1)

let undefinedVariable;
console.log("Undefined:", undefinedVariable);
let emptyValue = null;
console.log("Null:", emptyValue);

// 6. Object
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
};
console.log("Object:", person);

// 7. Array (a type of object)
let colors = ["red", "green", "blue"];
console.log("Array:", colors);

// 8. Symbol
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);

// 9. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber); 

const { Builder, By } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        let url = "https://www.google.com/"; // String
        await driver.get(url);

        let searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("Selenium WebDriver"); // String
    } finally {
        await driver.quit();
    }
})();