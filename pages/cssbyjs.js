const {Browser, By, Key, until} = require("selenium-webdriver");

const url = 'https://treehouse-projects.github.io/selenium-webdriver-intermediate/byjs/app/';

class ButtonsPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            status: By.id('status'),
            saveButton: By.js(function() {
                // Just like in ordinary JavaScript code, the "document"
                // object represents the web page. And as always, it has
                // a getElementsByTagName() method that we can use to find
                // all the <button> elements.
                var buttons = document.getElementsByTagName('button');
                // All the other features of ordinary JavaScript are available
                // to us, too. Here, we write a "for" loop to loop over the
                // array of button elements and find the button we want.
                for (index = 0; index < buttons.length; ++index) {
                    // We test whether the current button has text content
                    // of "Save". If it does, we've found our element.
                    if (buttons[index].textContent === "Save") {
                        // We return that element from the function, and
                        // that becomes the result of the By.js locator.
                        return buttons[index];
                    }
                }
            }),
        }
    }

    open() {
        this.driver.get(url);
    }
    async clickSave() {
        var button = await this.driver.findElement(this.locators.saveButton);
        await button.click();
    }
}

module.exports = ButtonsPage;
