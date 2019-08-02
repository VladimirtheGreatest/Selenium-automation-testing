require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');

const url = "https://treehouse-projects.github.io/selenium-webdriver-intermediate/waits/app/index.html";

suite(function(env) {
    describe('RSVP site', function() {  //what are we testing
        it('has invitee list', function() {  //what it should do or have
          env.builder().build()
          .then(driver => {
            driver.get(url)
              .then(() => driver.findElements(By.id('invitedList')))
              .then(elements => assert((elements.lenght > 0)))
              .then(() => driver.quit());
          });
        });
    });
});
