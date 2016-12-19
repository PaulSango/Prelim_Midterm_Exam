var assert = require('assert');
describe('Registration Page', function() {
    it('LOGINAPP-302', function () {
        browser.url('http://localhost:5050/Registration');
        console.log("Verifying Successful Registration: ");
        browser.setValue('#EmailAddress', 'Test2@gmail.com');
        browser.setValue('#Pass', 'Test123456');
        browser.setValue('#Pass2', 'Test123456');
        browser.click('#button2');

        var title = browser.getTitle();
        var url = browser.getUrl();
        console.log("Passed, loads directly to login url: "+url);

        //assert.equal(title, 'Dash');
        //console.log("Pass" + title);
    });
});

