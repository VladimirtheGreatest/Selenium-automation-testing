require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const RsvpPage = require('../pages/rsvp.js')


suite(function(env) {
    describe('RSVP site', async function() {
            this.timeout(10000);
        // Move variable definition here so it remains in scope
        let driver;
        let page;

        // Call before() and pass it a callback function that will be called before each test.
        before(async function() {
            // Move driver building here so it happens before each test
            driver = await env.builder().build();
            page = new RsvpPage(driver);
            // Need to get the page before each test too
            await page.open();
        });

        // This test (and any others defined within the describe() callback) will be run after the
        // before() callback, and before the after() callback.
        it('has invitee list', async function() {
            let elements = await driver.findElements(page.locators.invitedList);
            assert(elements.length > 0);
        });


        it('has registration form', async function() {
            let elements = await driver.findElements(page.locators.registrationForm);
            assert(elements.length > 0);
        });

        it('loads existing invitations', async function(){
          let list = await driver.findElement(page.locators.invitedList);
          await driver.wait(until.elementLocated(page.locators.invitees)); //waiting till everything is loaded, "explicit wait"
          let text = await list.getText();
          assert(text.includes("Craig Dennis"));
        });

        // Call after() and pass it another callback function that will be called after each test.
        after(async function() {
            // Move code to close browser here, because it needs to be run after each test.
            driver.quit();
        });
    });
});
