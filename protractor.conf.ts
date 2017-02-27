import { ProtractorBrowser, Config, protractor } from 'protractor';
export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        'chromeOptions': {
            args: [
                '--no-sandbox',
                '--window-size=1920,1080',
                '--ignore-certificate-errors',
                '--ssl-protocol=tlsv1',
                "--disable-extensions",
                '--disable-web-security'
            ]
        }
    },

    framework: 'jasmine',
    specs: ['./specs/LoginSpec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
};