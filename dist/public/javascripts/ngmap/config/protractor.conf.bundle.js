(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (__dirname){
// The main suite of Protractor tests.
exports.config = {
  seleniumServerJar: __dirname +
    '/../node_modules/gulp-protractor' +
    '/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

  browserName: 'chrome',

  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true, // List all tests in the console
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  },

  baseUrl: 'http://localhost:8888'
};

}).call(this,"/public/javascripts/ngmap/config")
},{}]},{},[1]);
