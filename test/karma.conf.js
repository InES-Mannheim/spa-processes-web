module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/assets/angular/angular.min.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/assets/angular/angular-mocks/angular-mocks.js',
      'app/assets/jquery/jquery.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};