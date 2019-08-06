const {Browser, By, Key, until} = require("selenium-webdriver");

const url = 'http://crossbrowsertesting.github.io/selenium_example_page.html';

class ExamplePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            formResults: By.id('form-results'),
            submit: By.id('submitbtn'),
            radioButtons: By.css('input[type="radio"]'),
        }
    }

    open() {
        this.driver.get(url);
    }

    async clickRadioButton(value) {
        await this.driver
            .findElement(By.css('input[type="radio"][value="' + value + '"]'))
            .click();
    }

    async submit(value) {
        await this.driver.findElement(this.locators.submit).click();
    }
}

module.exports = ExamplePage;
