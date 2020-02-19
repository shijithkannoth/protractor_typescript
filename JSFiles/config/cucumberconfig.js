"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.driver.manage().window().maximize();
        // await browser.waitForAngularEnabled(false)
    }),
    specs: ['./features/manager.feature'],
    cucumberOpts: {
        format: 'json:./cucumberReport.json',
        require: [
            './step-definitions/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvY3VjdW1iZXJjb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFFbEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsbURBQW1EO0lBQ25ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBQ0QsU0FBUyxFQUFFLEdBQVEsRUFBRTtRQUVqQixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM1Qyw2Q0FBNkM7SUFDaEQsQ0FBQyxDQUFBO0lBQ0QsS0FBSyxFQUFFLENBQUMsNEJBQTRCLENBQUM7SUFFckMsWUFBWSxFQUFFO1FBRVYsTUFBTSxFQUFFLDRCQUE0QjtRQUVwQyxPQUFPLEVBQUU7WUFDTCx5QkFBeUI7U0FDNUI7S0FFSjtDQUdKLENBQUMifQ==