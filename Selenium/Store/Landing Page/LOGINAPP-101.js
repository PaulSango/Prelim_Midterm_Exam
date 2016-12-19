var assert = require('assert');
describe('Landing Page', function() {
    it('LOGINAPP-101', function () {
        browser.url('http://localhost:5050/');
        var title = browser.getTitle();
		assert.equal(title, 'Landing Page');
		console.log("Verifying Page Title: " + title);
    });
});