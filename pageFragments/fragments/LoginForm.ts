import {$, browser} from "protractor";
import {BaseFragment} from "protractor-element-extend";

export class LoginFormFragment extends BaseFragment {
    loginField;
    passwordField;

    constructor() {
        super($('#login'));
        this.loginField = this.$('#login_field');
        this.passwordField = this.$('#password');
    }

    open() : void {
        browser.get('https://github.com/login');
    }

    login(username, password) {
        this.loginField.sendKeys(username);
        this.passwordField.sendKeys(password);
        this.$('.btn.btn-primary.btn-block').click();
    }
}