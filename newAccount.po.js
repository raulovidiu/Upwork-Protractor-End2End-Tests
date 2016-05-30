'use strict';

var NewAccount = function() {
   this.individualSignUp = element(by.linkText('Individual Sign Up'));
   this.firstName = element(by.model('userAccount.firstName'));
   this.lastName = element(by.model('userAccount.lastName'));
   this.email = element(by.model('userAccount.email'));
   this.password = element(by.model('userAccount.password'));
   this.policyAgreement = element(by.css('label[for="termsAccepted"]'));
};

module.exports = NewAccount;
