const {Browser, By, Key, until} = require("selenium-webdriver");

const url = 'http://crossbrowsertesting.github.io/selenium_example_page.html';

class ExamplePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            // This locator finds the drop-down by its ID.
            dropDown: By.id('dropdown'),
            // This locator finds the form results section.
            formResults: By.id('form-results'),
            // And this locator finds the button to submit the form.
            submit: By.id('submitbtn'),
        }
    }

    open() {
        this.driver.get(url);
    }

    // Now we need a method to select an option from the drop-down. clickOption()
    // takes a string parameter with the value attribute of the option it should
    // look for.
    async clickOption(value) {
        await this.driver.findElement(this.locators.dropDown)
            .findElement(By.css('[value=' + value + ']'))
            .click();
    }

    async submit(value) {
        await this.driver.findElement(this.locators.submit).click();
    }
}

module.exports = ExamplePage;
