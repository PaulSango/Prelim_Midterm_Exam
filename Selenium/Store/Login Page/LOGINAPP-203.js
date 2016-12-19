var assert = require('assert');
describe('Login page', function() {
    it('LOGINAPP-203', function () {
        browser.url('http://localhost:5050/Index');

        console.log("Initializing File....");
        console.log("Validating Valid Credentials: ");
        browser.setValue('#EmailAddress', 'admin@gmail.com');
        browser.setValue('#Pass', 'admin123');
        browser.click('#button');
    
        var title = browser.getTitle();
        var url = browser.getUrl();
        console.log("Passed Log-in: "+url);

        //var text = browser.getText('#warninglog');
        //console.log("Log-in: "+ text);
        //assert.equal(url, 'http://localhost:5050/Dash');
        //console.log("Pass" + title);
    });
   
});
