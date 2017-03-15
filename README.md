Install and configure Typescript:
----------------------------------
Navigate to your project folder and run the below command to install protractor locally.
----------------------------------------------------------------------------------------
    npm install protractor

Run the below command to install type script globally.
------------------------------------------------------
    sudo npm install -g typescript

As we are using ‘Node.js’ and ‘Jasmine’ framework. We need to install ‘typings’ of node and jasmine.
-----------------------------------------------------------------------------------------------------
Run the below commands to install ‘@types/jasmine’ and ‘@types/node’.
----------------------------------------------------------------------
    npm install @types/jasmine
    npm install @types/node
    npm install jasmine-protractor-matchers
    npm install typescript
    npm install ts-node
    npm install systemjs

Protractor Fragments
---------------------
    npm install protractor-element-extend --save-dev

How to Run?
------------
Run the below command to run selenium server.
----------------------------------------------
    webdriver-manager start

Open new CommandPrompt/Terminal and navigate to your project location and run the below command to run the tests.
------------------------------------------------------------------------------------------------------------------
    npm test