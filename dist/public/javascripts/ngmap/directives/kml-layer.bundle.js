(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name kml-layer
 * @param Attr2MapOptions {service} convert html attribute to Gogole map api options
 * @description
 *   renders Kml layer on a map
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @attr {Url} url url of the kml layer
 * @attr {KmlLayerOptions} KmlLayerOptions
 *   (https://developers.google.com/maps/documentation/javascript/reference#KmlLayerOptions) 
 * @attr {String} &lt;KmlLayerEvent> Any KmlLayer events,
 *   https://developers.google.com/maps/documentation/javascript/reference
 * @example
 * Usage:
 *   <map MAP_ATTRIBUTES>
 *    <kml-layer ANY_KML_LAYER ANY_KML_LAYER_EVENTS"></kml-layer>
 *   </map>
 *
 * Example:
 *
 * <map zoom="11" center="[41.875696,-87.624207]">
 *   <kml-layer url="https://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml" >
 *   </kml-layer>
 * </map>
 */
(function() {
  'use strict';

  angular.module('ngMap').directive('kmlLayer', [
    'Attr2MapOptions', function(Attr2MapOptions) {
    var parser = Attr2MapOptions;

    var getKmlLayer = function(options, events) {
      var kmlLayer = new google.maps.KmlLayer(options);
      for (var eventName in events) {
        google.maps.event.addListener(kmlLayer, eventName, events[eventName]);
      }
      return kmlLayer;
    };

    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],

      link: function(scope, element, attrs, mapController) {
        mapController = mapController[0]||mapController[1];

        var orgAttrs = parser.orgAttributes(element);
        var filtered = parser.filter(attrs);
        var options = parser.getOptions(filtered, {scope: scope});
        var events = parser.getEvents(scope, filtered);
        console.log('kml-layer options', options, 'events', events);

        var kmlLayer = getKmlLayer(options, events);
        mapController.addObject('kmlLayers', kmlLayer);
        mapController.observeAttrSetObj(orgAttrs, attrs, kmlLayer);  //observers
        element.bind('$destroy', function() {
          mapController.deleteObject('kmlLayers', kmlLayer);
        });
      }
     }; // return
  }]);
})();

},{}]},{},[1]);
