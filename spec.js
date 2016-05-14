'use strict';

var NewAccount = require('./newAccount.PageObject');

describe('Navigate to Upwork, Search for a Freelancer and Create a Valid Account', function() {

   var searchFreelancersInput = element(by.css('input[eo-focus="focus"]'));
   var stelaArdelean = element(by.linkText('Stela Ardelean'));
   var signUp = element(by.css('a[href="/signup/create-account"]'));
   var hireBtn = element(by.linkText('Hire'));
   var signUpWithEmail = element(by.css('a.btn.btn-md.btn-primary.eo-btn-email'));
   var continueJobPost = element(by.css('button[type="submit"]'));
   var individualSignUp = element(by.linkText('Individual Sign Up'));
   var getStartedBtn = element(by.buttonText('Get Started'));


   it('Should Navigate to Upwork Home Page', function() {
      browser.driver.manage().window().maximize();
      browser.get('https://www.upwork.com/');
      expect(browser.getTitle()).toEqual('Upwork - Hire Freelancers & Get Freelance Jobs Online');
   });


   it('Should Search for a Freelancer', function() {
      searchFreelancersInput.sendKeys('Ardelean').submit();
      expect(browser.getCurrentUrl()).toEqual('https://www.upwork.com/o/profiles/browse/?q=Ardelean');
   });


   it('Should Open the Stela Ardelean Profile Page', function() {
      stelaArdelean.click();
      expect(browser.getCurrentUrl()).toBe('https://www.upwork.com/o/profiles/users/_~0198a6f4ef264098d9/');
   });


   it("Should exist the Swift skill on Ardelean's Profile Page", function() {
      var swiftCategory = element(by.linkText('Swift'));
      expect(swiftCategory.isPresent()).toBe(true);
   });


   it('Should click the Sign Up button from Navigation Menu', function() {
      signUp.click();
      expect(browser.getCurrentUrl()).toBe('https://www.upwork.com/signup/');
   });


   it('Should Click the Hire button',function() {
      hireBtn.click();
      expect(browser.getCurrentUrl()).toBe('https://www.upwork.com/signup/create-account/client_direct');
   });


   it('Should Click the Sign Up with Email button', function() {
      signUpWithEmail.click();
      expect(getStartedBtn.isPresent()).toBe(true);
   });


   it('Should Fill the Create a Free Client Account Form', function() {
      var newAccount = new NewAccount();

      individualSignUp.click();

      newAccount.firstName.click().sendKeys('FirstName');
      newAccount.lastName.click().sendKeys('LastName');
      newAccount.email.click().sendKeys('RamonGuiCosta2@yahoo.es');
      newAccount.password.click().sendKeys('Password1!$');
      newAccount.policyAgreement.click();

      getStartedBtn.click();

      browser.wait(function() {
         return browser.driver.isElementPresent(by.css('button[type="submit"]'));
      });
   });

});
