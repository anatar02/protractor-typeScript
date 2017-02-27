import { ElementFinder, browser, by, element, protractor } from 'protractor';

export class LoginPage {
    usernameInput = element(by.id('login_field'));
    passwordInput = element(by.id('password'));
    submitButton = element(
        by.xpath('//div[@id="login"]//input[@value="Sign in"]'));
    dashboard = element(by.id('dashboard'));
 
    open() : void {
        browser.get('https://github.com/login');
    }
 
    login(username, password) : void {
        this.usernameInput.sendKeys(username);
        this.passwordInput.sendKeys(password);
        this.submitButton.click();
    }

    checkLogin(): void {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(this.dashboard), 5000);
    }
}