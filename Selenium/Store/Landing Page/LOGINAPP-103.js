var assert = require('assert');
describe('Landing Page', function() {
    it('LOGINAPP-103', function () {
        browser.url('http://localhost:5050/');
        browser.click('#ToLogin');
        console.log("Initializing File....");
        console.log("Verifying Login Form");
        assert(browser.getUrl(), 'http://localhost:5050/Index');
        console.log("You are at login form: "+ browser.getUrl());
    });
});