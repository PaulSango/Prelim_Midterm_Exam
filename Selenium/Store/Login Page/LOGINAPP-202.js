var assert = require('assert');
describe('Login page', function() {
    it('LOGINAPP-202', function () {
        browser.url('http://localhost:5050/Index');


        console.log("Validating Invalid Credentials: ");
        browser.setValue('#EmailAddress', 'invalid@gmail.com');
        browser.setValue('#Pass', 'invalid123');
        browser.click('#button');
    
        var text = browser.getText('#warninglog');
        console.log("Invalid: "+ text);
        //var title = browser.getTitle();
        //var url = browser.getUrl();
        //console.log("Passed Index - "+url);
        //assert.equal(url, 'http://localhost:5050/Dash');
        //console.log("Pass" + title);
    });
   
});
