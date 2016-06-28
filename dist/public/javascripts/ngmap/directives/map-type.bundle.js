(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name map-type
 * @param Attr2MapOptions {service} 
 *   convert html attribute to Google map api options
 * @description
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @example
 * Example:
 *
 *   <map zoom="13" center="34.04924594193164, -118.24104309082031">
 *     <map-type name="coordinate" object="coordinateMapType"></map-type>
 *   </map>
 */
(function() {
  'use strict';

  angular.module('ngMap').directive('mapType', ['$parse', 'NgMap',
    function($parse, NgMap) {

    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],

      link: function(scope, element, attrs, mapController) {
        mapController = mapController[0]||mapController[1];

        var mapTypeName = attrs.name, mapTypeObject;
        if (!mapTypeName) {
          throw "invalid map-type name";
        }
        mapTypeObject = $parse(attrs.object)(scope);
        if (!mapTypeObject) {
          throw "invalid map-type object";
        }

        NgMap.getMap().then(function(map) {
          map.mapTypes.set(mapTypeName, mapTypeObject);
        });
        mapController.addObject('mapTypes', mapTypeObject);
      }
     }; // return
  }]);
})();

},{}]},{},[1]);
