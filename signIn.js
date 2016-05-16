'use strict';

describe('Authenticate a Valid User', function() {

    it('Should Navigate to Home Page', function() {
        browser.driver.manage().window().maximize();
        browser.get('https://www.upwork.com/');
        var becomeFreelancer = element(by.linkText('Become a Freelancer'));
        expect(becomeFreelancer.isPresent()).toBe(true);
    });

});
