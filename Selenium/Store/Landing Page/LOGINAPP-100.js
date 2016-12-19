var assert = require('assert');
describe('Landing Page', function() {
    it('LOGINAPP-101', function () {
        browser.url('http://localhost:5050/');
        console.log("Initializing File....");
        console.log("Verifying Page Title");
        assert.equal(browser.getTitle(), 'Landing Page');
        console.log("Page Title: "+browser.getTitle());
        
    });
});