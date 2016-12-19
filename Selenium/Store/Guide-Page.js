var assert = require('assert');
describe('Guide Page', function() {
    it('GUIDE-101', function () {
        browser.url('http://localhost:5050/Root');
		
        browser.click('#ToMain');


		console.log(browser.getUrl());
		assert.equal(browser.getUrl(), 'http://localhost:5050/');
		var text = browser.getText('#landingdescription');
        console.log(text);
        console.log(browser.getTitle());
		console.log("You are at ↑");
		//console.log("Title: " + title);
		//var text = browser.getText('#Gwapo');
        //console.log("Define handsome: "+ text);
    });
});


//var assert = require('assert');
//describe('Guide Page', function() {
//    it('GUIDE-101', function () {
//        browser.url('http://localhost:5050/Root');
		
//        browser.click('#Life');

//        console.log("proceed");



        
//		console.log(browser.getUrl());
//		var haha = browser.getTitle();
//		console.log(haha);

//		assert.equal(haha, 'Landing Page');

//		console.log("True");
		//console.log("Title: " + title);
		//var text = browser.getText('#Gwapo');
        //console.log("Define handsome: "+ text);
//	  });
//});