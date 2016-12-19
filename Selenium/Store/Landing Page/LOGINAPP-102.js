var assert = require('assert');
describe('Landing Page', function() {
    it('LOGINAPP-102', function () {
        browser.url('http://localhost:5050/');
        console.log("Verifying Page Description:");
        var text = browser.getText('#landingdescription2');
    	assert(text === 'Greetings!');
        console.log(text);
        //assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});