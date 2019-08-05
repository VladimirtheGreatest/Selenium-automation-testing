const {Browser, By, Key, until} = require("selenium-webdriver");


const url = 'http://scrollmagic.io/examples/advanced/infinite_scrolling.html';


class ScrollPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {

            boxes: By.css('.box1'),

            loader: By.id('loader'),
        }
    }

    open() {
        this.driver.get(url);
    }

    //  method that our test calls
    // to scroll to the loader element at the bottom of the
    // page.
    async loadContent() {

        var loader = await this.driver.findElement(this.locators.loader);
        // To scroll the page, we need to execute some
        // JavaScript on the page. We do this by calling
        // the executeScript() method on the driver. We pass
        // the JavaScript we want to run as the first
        // argument. Additional arguments to executeScript()
        // get passed as arguments to that JavaScript code.
        // So we pass it our loader element, and then have
        // the JavaScript code scroll that element into view.
        await this.driver.executeScript("arguments[0].scrollIntoView();", loader);
        // add an explicit
        // wait here that waits until the loader element no longer
        // has the "active" class.
        await this.driver.wait(until.elementLocated(By.css('#loader:not(.active)')));
    }
}

module.exports = ScrollPage;
