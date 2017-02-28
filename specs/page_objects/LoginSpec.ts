import {LoginPage} from "../../pageObjects/LoginPage";

describe('Login', function() {
 
    let loginPage = new LoginPage();
 
    it('should allow a user to login to the system', function() {
        loginPage.open();
        loginPage.login("user", "pass");
        loginPage.checkLogin();
    });
});