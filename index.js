require('chromedriver');
const selenium = require ('selenium-webdriver');
const By = selenium.By;
const driver = new selenium.Builder().forBrowser("chrome").build();

driver.get(process.env.URL);

const locators = {
    inviteeForm : By.id("registrar"),
    inviteeNameField : By.name("name")
};

function addInvitee(name){
  driver.findElement(locators.inviteeNameField).sendKeys(name);
  driver.findElement(locators.inviteeForm).submit();
}

addInvitee("joseph Smith");
addInvitee("Boris Johnson");
