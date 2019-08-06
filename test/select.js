require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const ExamplePage = require('../pages/example.js');

suite(function(env) {
    describe('Dropdown', function() {
          this.timeout(10000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new ExamplePage(driver);
            await page.open();
        });

        // Here's our test to ensure the status text gets updated when we
        // select an item from the dropdown.
        it('Updates status text', async function() {
            await page.clickOption('option3');
            await page.submit();
            let results = await driver.findElement(page.locators.formResults);
            let text = await results.getText();
            assert(text.includes("option3"));
        });

        after(async function() {
            driver.quit();
        });
    });
});
