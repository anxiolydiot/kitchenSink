(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name overlay-map-type
 * @param Attr2MapOptions {service} convert html attribute to Gogole map api options
 * @param $window {service}
 * @description
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @example
 * Example:
 *
 * <map zoom="13" center="34.04924594193164, -118.24104309082031">
 *   <overlay-map-type index="0" object="coordinateMapType"></map-type>
 * </map>
 */
(function() {
  'use strict';

  angular.module('ngMap').directive('overlayMapType', [
    'NgMap', function(NgMap) {

    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],

      link: function(scope, element, attrs, mapController) {
        mapController = mapController[0]||mapController[1];

        var initMethod = attrs.initMethod || "insertAt";
        var overlayMapTypeObject = scope[attrs.object];

        NgMap.getMap().then(function(map) {
          if (initMethod == "insertAt") {
            var index = parseInt(attrs.index, 10);
            map.overlayMapTypes.insertAt(index, overlayMapTypeObject);
          } else if (initMethod == "push") {
            map.overlayMapTypes.push(overlayMapTypeObject);
          }
        });
        mapController.addObject('overlayMapTypes', overlayMapTypeObject);
      }
     }; // return
  }]);
})();

},{}]},{},[1]);
