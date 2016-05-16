exports.config = {

  framework: 'jasmine',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['signIn.js'],

  multiCapabilities: [{
    browserName: 'chrome'
  }],

   jasmineNodeOpts: {
      print: function() {}
   },

   onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
   }

};
