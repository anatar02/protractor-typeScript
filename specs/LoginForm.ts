import {LoginForm} from '../pageObjects/fragment/LoginForm';
import {LoginPage} from '../pageObjects/LoginPage';

describe('Login', function() {

    it('should allow a user to login to the system', function() {
        let loginForm = new LoginForm();
        let loginPage = new LoginPage();

        loginPage.open();
        loginForm.loginForm.login('user', 'pass')
    });
});