(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name dynamic-maps-engine-layer
 * @description
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @example
 * Example:
 *   <map zoom="14" center="[59.322506, 18.010025]">
 *     <dynamic-maps-engine-layer
 *       layer-id="06673056454046135537-08896501997766553811">
 *     </dynamic-maps-engine-layer>
 *    </map>
 */
(function() {
  'use strict';

  angular.module('ngMap').directive('dynamicMapsEngineLayer', [
    'Attr2MapOptions', function(Attr2MapOptions) {
    var parser = Attr2MapOptions;

    var getDynamicMapsEngineLayer = function(options, events) {
      var layer = new google.maps.visualization.DynamicMapsEngineLayer(options);

      for (var eventName in events) {
        google.maps.event.addListener(layer, eventName, events[eventName]);
      }

      return layer;
    };

    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],

      link: function(scope, element, attrs, mapController) {
        mapController = mapController[0]||mapController[1];

        var filtered = parser.filter(attrs);
        var options = parser.getOptions(filtered, {scope: scope});
        var events = parser.getEvents(scope, filtered, events);

        var layer = getDynamicMapsEngineLayer(options, events);
        mapController.addObject('mapsEngineLayers', layer);
      }
     }; // return
  }]);
})();

},{}]},{},[1]);
