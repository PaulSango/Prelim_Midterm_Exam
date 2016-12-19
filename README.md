# Finals<br />
# First:<br />
------
Run the xammp-control and open the mysql, use the users.sql(this is database code)file to create database inside the LoginApp under package.json

# Secondly:<br />
------
Note: If you are using chrome you don't need to perform this.<br />

Perform these following:<br />

1.  This only intends for mozilla-firefox user.<br />
2.  In the main folder, perform the next task, (npm install geckodriver) at (gitbash.exe) which creates node_modules.<br />
    So there will be 3 folders overall:<br />
    LoginApp<br />
    Selenium<br />
    node_modules (If you ever wonder why we do this stuff is because we need the geckodriver inside this node_module to perform the test.)<br />
2.  After installing it, node_modules will be downloaded.<br />
3.  Inside the node_modules you will find the (geckodriver) folder, click it.<br />
4.  Now you need to copy all the files in selenium folder to (geckodriver folder - inside the node_modules you just created)
    Selenium/ (All files here to) node_modules/geckodriver<br />
5.  Now you are done copying the testcases inside the node_modules/geckodriver, next is.<br />
6.  Inside the geckodriver folder, download the selenium standalone using gitbash.exe and type this or copy:<br />
    curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar<br />
    (This standalone will automatically test all your webapp)<br />
7.  Now you have the selenium standalone. But without this, webdriver.io do nothing while testing and fall into failure. Perform the webdriver.io below this.<br />
8.  npm install webdriverio (an integrated test runner - this will be use by the selenium standalone driver as assistance for checking)<br />

You can now test the project.<br />

1.  Go to LoginApp folder:<br />
    Run gitbash.exe on this folder, write (npm start) the project will be running.<br />
2.  Run the selenium standalone server inside the node_modules/geckodriver using gitbash.exe<br />
    This = java -jar -Dwebdriver.geckodriver.driver=./geckodriver selenium-server-standalone-3.0.1.jar<br />
3.  Run the webdriver.io inside the node_modules/geckodriver using gitbash.exe<br />
    This = ./node_modules/.bin/wdio wdio.conf.js<br />
    <br />
    Please perform this accordingly. Thanks.


