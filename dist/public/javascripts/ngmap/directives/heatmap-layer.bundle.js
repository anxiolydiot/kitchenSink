(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name heatmap-layer
 * @param Attr2Options {service} convert html attribute to Gogole map api options
 * @description
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @example
 *
 * <map zoom="11" center="[41.875696,-87.624207]">
 *   <heatmap-layer data="taxiData"></heatmap-layer>
 * </map>
 */
(function() {
  'use strict';

  angular.module('ngMap').directive('heatmapLayer', [
    'Attr2MapOptions', '$window', function(Attr2MapOptions, $window) {
    var parser = Attr2MapOptions;
    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],

      link: function(scope, element, attrs, mapController) {
        mapController = mapController[0]||mapController[1];

        var filtered = parser.filter(attrs);

        /**
         * set options
         */
        var options = parser.getOptions(filtered, {scope: scope});
        options.data = $window[attrs.data] || scope[attrs.data];
        if (options.data instanceof Array) {
          options.data = new google.maps.MVCArray(options.data);
        } else {
          throw "invalid heatmap data";
        }
        var layer = new google.maps.visualization.HeatmapLayer(options);

        /**
         * set events
         */
        var events = parser.getEvents(scope, filtered);
        console.log('heatmap-layer options', layer, 'events', events);

        mapController.addObject('heatmapLayers', layer);
      }
     }; // return
  }]);
})();

},{}]},{},[1]);
