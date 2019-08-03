require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');

const url = "https://treehouse-projects.github.io/selenium-webdriver-intermediate/waits/app/index.html";

suite(function(env) {
    describe('RSVP site', async function() {
            this.timeout(10000);
        // Move variable definition here so it remains in scope
        let driver;

        // Call before() and pass it a callback function that will be called before each test.
        before(async function() {
            // Move driver building here so it happens before each test
            driver = await env.builder().build();
            // Need to get the page before each test too
            await driver.get(url);
        });

        // This test (and any others defined within the describe() callback) will be run after the
        // before() callback, and before the after() callback.
        it('has invitee list', async function() {
            let elements = await driver.findElements(By.id('invitedList'));
            assert(elements.length > 0);
        });


        it('has registration form', async function() {
            let elements = await driver.findElements(By.id('registrar'));
            assert(elements.length > 0);
        });

        // Call after() and pass it another callback function that will be called after each test.
        after(async function() {
            // Move code to close browser here, because it needs to be run after each test.
            driver.quit();
        });
    });
});


