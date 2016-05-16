'use strict';

describe('Authenticate a Valid User', function() {
    var loginBtn = element(by.css('a.header-link-login.text-uppercase'));
    var userName = element(by.model('username'));
    var password = element(by.model('password'));
    var logInBtn = element(by.buttonText('Log In'));

    it('Should Navigate to Home Page', function() {
        browser.driver.manage().window().maximize();
        browser.get('https://www.upwork.com/');
        var becomeFreelancer = element(by.linkText('Become a Freelancer'));
        expect(becomeFreelancer.isPresent()).toBe(true);
    });


    it('Should Click the Login Button', function() {
        loginBtn.click();
        expect(browser.getCurrentUrl()).toBe('https://www.upwork.com/login');
    });


    it('Should Enter Valid Credentials and Click Log In', function() {
        userName.click().sendKeys('RamonGuiCosta2@yahoo.es');
        password.click().sendKeys('Password1!$');
        logInBtn.click();
        expect(browser.getCurrentUrl()).toBe('https://www.upwork.com/ab/jobs-home/2988154?cell=Treatment3');
    });


});
