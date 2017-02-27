import {LoginForm} from '../pageObjects/fragment/LoginForm';

describe('Login', function() {

    it('should allow a user to login to the system', function() {
        let loginForm = new LoginForm();

        loginForm.loginForm.open();
        loginForm.loginForm.login('user', 'pass');
    });
});