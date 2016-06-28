(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc filter
 * @name camel-case
 * @description
 *   Converts string to camel cased
 */
(function() {
  'use strict';

  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;

  var camelCaseFilter = function() {
    return function(name) {
      return name.
        replace(SPECIAL_CHARS_REGEXP,
          function(_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).
        replace(MOZ_HACK_REGEXP, 'Moz$1');
    };
  };

  angular.module('ngMap').filter('camelCase', camelCaseFilter);
})();

},{}]},{},[1]);
