var assert = require('assert');
describe('Dash page', function() {
    it('LOGINAPP402', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");
        console.log("Validating Successful Logout");
        browser.click('#button3');
        var title = browser.getTitle();
		var url = browser.getUrl();
		console.log("Log-out Link: "+url);
        //assert.equal(url, 'http://localhost:5050/Dash');
        //console.log("Pass" + title);
    });
   
});

