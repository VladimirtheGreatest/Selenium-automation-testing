require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');

const url = "https://treehouse-projects.github.io/selenium-webdriver-intermediate/waits/app/index.html";

suite(function(env) {
    describe('RSVP site', function() {  //what are we testing
      this.timeout(10000);
        it('has invitee list', async function() {  //what it should do or have
          let driver =  await env.builder().build();
          await driver.get(url);
          let elements = await driver.findElements(By.id('invitedList'));
          assert(elements.length > 0);
          driver.quit();
        });
    });
});

