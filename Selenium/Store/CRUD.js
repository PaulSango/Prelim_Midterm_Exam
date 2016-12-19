
describe('Dash page - refresh', function() {
    it('LOGINAPP404 - Verify successful refresh', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");

        browser.click('#refresh');
        var text = browser.getText('#successlog');
        console.log("Pass " + text);


    });
   
});



describe('Dash page - delete', function() {
    it('LOGINAPP404 - Verify successful delete', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");
        

        browser.setValue('#SearchBox', 'Test2@gmail.com');
        browser.click('#search');
        browser.click('#delete');

        var text = browser.getText('#successlog');
        console.log("Pass " + text);

    });
   
});


describe('Dash page - add', function() {
    it('LOGINAPP403 - Verify successful add', function () {
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

describe('Dash page - search', function() {
    it('LOGINAPP404 - Verify successful search', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");
        

        browser.setValue('#SearchBox', 'admin@gmail.com');
        browser.click('#search');

        var text = browser.getText('#searchlog');
        console.log("Pass " + text);

    });
   
});


describe('Dash page - update', function() {
    it('LOGINAPP404 - Verify successful update', function () {
        browser.url('http://localhost:5050/Dash');
        console.log("Initializing File....");

        browser.setValue('#SearchBox', 'testfile@gmail.com');
        browser.click('#search');

        browser.setValue('#EmailAddress', 'sango44@gmail.com');
        browser.setValue('#Pass', 'sango123456');
        browser.click('#update');

        var text = browser.getText('#successlog');
        console.log("Pass " + text);

    });
   
});
