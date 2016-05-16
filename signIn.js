'use strict';

describe('Authenticate a Valid User', function() {
    var loginBtn = element(by.css('a.header-link-login.text-uppercase'));


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


});


// click login button -> navigate to /login -> assert
//
