var assert = require('assert');
describe('Dash page', function() {
    it('LOGINAPP-401', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Verifying Logout Navigation");
        var text = browser.getText('#confirm-navigation');
        console.log("Button Name: "+ text);
        //assert.equal(url, 'http://localhost:5050/Dash');
        //console.log("Pass" + title);
    });
   
});

