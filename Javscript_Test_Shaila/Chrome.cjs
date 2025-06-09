const  { Builder } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

driver.get("https://www.google.com/");