(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name map-data
 * @param Attr2MapOptions {service}
 *   convert html attribute to Gogole map api options
 * @description
 *   set map data
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @wn {String} method-name, run map.data[method-name] with attribute value
 * @example
 * Example:
 *
 *  <map zoom="11" center="[41.875696,-87.624207]">
 *    <map-data load-geo-json="https://storage.googleapis.com/maps-devrel/google.json"></map-data>
 *   </map>
 */
(function() {
  'use strict';

  angular.module('ngMap').directive('mapData', [
    'Attr2MapOptions', 'NgMap', function(Attr2MapOptions, NgMap) {
    var parser = Attr2MapOptions;
    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],

      link: function(scope, element, attrs) {
        var filtered = parser.filter(attrs);
        var options = parser.getOptions(filtered, {scope: scope});
        var events = parser.getEvents(scope, filtered, events);

        console.log('map-data options', options);
        NgMap.getMap().then(function(map) {
          //options
          for (var key in options) {
            var val = options[key];
            if (typeof scope[val] === "function") {
              map.data[key](scope[val]);
            } else {
              map.data[key](val);
            }
          }

          //events
          for (var eventName in events) {
            map.data.addListener(eventName, events[eventName]);
          }
        });
      }
     }; // return
  }]);
})();

},{}]},{},[1]);
