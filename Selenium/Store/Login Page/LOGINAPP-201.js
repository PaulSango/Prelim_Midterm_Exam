var assert = require('assert');
describe('Login page', function() {
    it('LOGINAPP-201', function () {
        browser.url('http://localhost:5050/Index');
        console.log("Validating Empty Credentials: ");
        browser.click('#button');
        var text = browser.getText('#warninglog');
        console.log("Validation(Empty): "+ text);

        //assert.equal(title, 'Dash');
        //console.log("Pass" + title);
    });
});

