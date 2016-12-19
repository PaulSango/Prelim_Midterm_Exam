var assert = require('assert');
describe('Registration page', function() {
    it('LOGINAPP-301', function () {
        browser.url('http://localhost:5050/Registration');
        console.log("Initializing File....");
        console.log("Verifying Empty Fields: ");
        browser.click('#button2');
        var text = browser.getText('#warninglog');
        console.log("Validation(Empty): "+ text);

        //assert.equal(title, 'Dash');
        //console.log("Pass" + title);
    });
});

