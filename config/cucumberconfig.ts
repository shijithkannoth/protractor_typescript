import { Config, browser } from "protractor";

export let config: Config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: async() =>{

        browser.driver.manage().window().maximize() 
       //await browser.waitForAngularEnabled(false)
    },
    specs: ['./features/manager.feature'],

    cucumberOpts: {

        format: 'json:./cucumberReport.json',

        require: [
            './step-definitions/*.js'
        ]

    }


};


