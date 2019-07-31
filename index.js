require('chromedriver');
const selenium = require ('selenium-webdriver');
const By = selenium.By;
const URL = "http://port-80-ihmb0bgzfl.treehouse-app.com/";
const driver = new selenium.Builder().forBrowser("chrome").build();

driver.get(URL);

const locators = {
    inviteeForm : By.id("registrar"),
    inviteeNameField : By.css("#registrar input[name='name']")
};

function addInvitee(name){
  driver.findElement(locators.inviteeNameField).sendKeys(name);
  driver.findElement(locators.inviteeForm).submit();
}

addInvitee("joseph Smith");
addInvitee("Boris Johnson");

