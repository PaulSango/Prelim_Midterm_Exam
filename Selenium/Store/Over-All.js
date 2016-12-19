var assert = require('assert');
describe('LOGINAPP-100 - Landing', function() {
    it('Testing', function () {
        browser.url('http://localhost:5050/');
        console.log("Initializing File....");
        console.log("Verifying Page Title");
        assert.equal(browser.getTitle(), 'Landing Page');
        console.log("Page Title: "+browser.getTitle());
        
    });
});

describe('LOGINAPP-101 - Landing', function() {
    it('Landing Page', function () {
        browser.url('http://localhost:5050/');
        var title = browser.getTitle();
        assert.equal(title, 'Landing Page');
        console.log("Verifying Page Title: " + title);
    });
});

describe('LOGINAPP-102 - Landing Page', function() {
    it('Verifying Page Description', function () {
        browser.url('http://localhost:5050/');
        console.log("Verifying Page Description:");
        var text = browser.getText('#landingdescription2');
        assert(text === 'Greetings!');
        console.log(text);
        //assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});

describe('LOGINAPP-103 - Landing', function() {
    it('Verifying Login Form', function () {
        browser.url('http://localhost:5050/');
        browser.click('#ToLogin');
        console.log("Initializing File....");
        console.log("Verifying Login Form");
        assert(browser.getUrl(), 'http://localhost:5050/Index');
        console.log("You are at login form: "+ browser.getUrl());
    });
});

describe('LOGINAPP-201 - Login', function() {
    it('Validating Empty Credentials', function () {
        browser.url('http://localhost:5050/Index');
        console.log("Validating Empty Credentials: ");
        browser.click('#button');
        var text = browser.getText('#warninglog');
        console.log("Validation(Empty): "+ text);

        //assert.equal(title, 'Dash');
        //console.log("Pass" + title);
    });
});

describe('LOGINAPP-202 - Login', function() {
    it('Validating Invalid Credentials', function () {
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




describe('LOGINAPP-301 - Registration', function() {
    it('Verify Empty Fields', function () {
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

describe('LOGINAPP-302 - Registration ', function() {
    it('Registration Success', function () {
        browser.url('http://localhost:5050/Registration');
        console.log("Verifying Successful Registration: ");
        browser.setValue('#EmailAddress', 'psango44@gmail.com');
        browser.setValue('#Pass', 'psango123456');
        browser.setValue('#Pass2', 'psango123456');
        browser.click('#button2');

        var title = browser.getTitle();
        var url = browser.getUrl();
        console.log("Passed, loads directly to login url: "+url);

        //assert.equal(title, 'Dash');
        //console.log("Pass" + title);
    });
});



describe('LOGINAPP-203 - Login', function() {
    it('Validating Valid Credentials', function () {
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

// Starts here
describe('LOGINAPP-401 - dash - Navigation', function() {
    it('Navigation Success', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Verifying Logout Navigation");
        var text = browser.getText('#confirm-navigation');
        console.log("Button Name: "+ text);
        //assert.equal(url, 'http://localhost:5050/Dash');
        //console.log("Pass" + title);
    });
   
});

describe('LOGINAPP402 - dash - logout', function() {
    it('Logout Success', function () {
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

// CRUD 


describe('LOGINAPP404 - dash - refresh', function() {
    it('Verify successful refresh', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");

        browser.click('#refresh');
        var text = browser.getText('#successlog');
        console.log("Pass " + text);


    });
   
});



describe('LOGINAPP403 - dash - add', function() {
    it('Verify successful add', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");

        browser.setValue('#EmailAddress', 'Testfile@gmail.com');
        browser.setValue('#Pass', 'Testfile123456');
        browser.click('#addnew');

        var text = browser.getText('#successlog');
        console.log("Pass " + text);
        //assert.equal(title, 'Dash');
        //console.log("Pass" + title);

    });
   
});

describe('LOGINAPP404 - dash - search', function() {
    it('Verify successful search', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");
        

        browser.setValue('#SearchBox', 'admin@gmail.com');
        browser.click('#search');

        var text = browser.getText('#searchlog');
        console.log("Pass " + text);

    });
   
});


describe('LOGINAPP404 - dash - update', function() {
    it('Verify successful update', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");

        browser.setValue('#SearchBox', 'Testfile@gmail.com');
        browser.click('#search');

        browser.setValue('#EmailAddress', 'sango44@gmail.com');
        browser.setValue('#Pass', 'sango123456');
        browser.click('#update');

        var text = browser.getText('#successlog');
        console.log("Pass " + text);

    });
   
});

describe('LOGINAPP404 - dash - delete', function() {
    it('Verify successful delete', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");
        

        browser.setValue('#SearchBox', 'sango44@gmail.com');
        browser.click('#search');
        browser.click('#delete');

        var text = browser.getText('#successlog');
        console.log("Pass " + text);

    });
   
});