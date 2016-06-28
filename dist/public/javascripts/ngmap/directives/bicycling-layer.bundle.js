(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name bicycling-layer
 * @param Attr2Options {service}
 *   convert html attribute to Gogole map api options
 * @description
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @example
 *
 *   <map zoom="13" center="34.04924594193164, -118.24104309082031">
 *     <bicycling-layer></bicycling-layer>
 *    </map>
 */
(function() {
  'use strict';
  var parser;

  var linkFunc = function(scope, element, attrs, mapController) {
    mapController = mapController[0]||mapController[1];
    var orgAttrs = parser.orgAttributes(element);
    var filtered = parser.filter(attrs);
    var options = parser.getOptions(filtered, {scope: scope});
    var events = parser.getEvents(scope, filtered);

    console.log('bicycling-layer options', options, 'events', events);

    var layer = getLayer(options, events);
    mapController.addObject('bicyclingLayers', layer);
    mapController.observeAttrSetObj(orgAttrs, attrs, layer);  //observers
    element.bind('$destroy', function() {
      mapController.deleteObject('bicyclingLayers', layer);
    });
  };

  var getLayer = function(options, events) {
    var layer = new google.maps.BicyclingLayer(options);
    for (var eventName in events) {
      google.maps.event.addListener(layer, eventName, events[eventName]);
    }
    return layer;
  };

  var bicyclingLayer= function(Attr2MapOptions) {
    parser = Attr2MapOptions;
    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],
      link: linkFunc
     };
  };
  bicyclingLayer.$inject = ['Attr2MapOptions'];

  angular.module('ngMap').directive('bicyclingLayer', bicyclingLayer);
})();

},{}]},{},[1]);
