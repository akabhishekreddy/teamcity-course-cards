/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",
    plugins : [
    'karma-junit-reporter',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-ie-launcher',
    'karma-jasmine'
    ],

    files: [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-route/angular-route.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/bower_components/underscore/underscore.js",
      "app/cards/**/*.js",
      "app/klondike/piles/pile.js",
      "app/klondike/piles/foundationPile.js",
      "app/klondike/piles/remainderPile.js",
      "app/klondike/piles/tableauPile.js",
      "app/klondike/*.js",
      "tests/**/*.js"
    ],

    autoWatch: true,

    frameworks: ["jasmine"],

    browsers: ["Chrome","Firefox","IE"],
    browserNoActivityTimeout: 200000

  });
};
