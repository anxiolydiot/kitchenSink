(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name streetview-panorama
 * @param Attr2MapOptions {service} convert html attribute to Gogole map api options
 * @description
 *   Requires:  map directive
 *   Restrict To:  Element
 *
 * @attr container Optional, id or css selector, if given, streetview will be in the given html element
 * @attr {String} &lt;StreetViewPanoramaOption>
 *   [Any Google StreetViewPanorama options](https://developers.google.com/maps/documentation/javascript/reference?csw=1#StreetViewPanoramaOptions)
 * @attr {String} &lt;StreetViewPanoramaEvent>
 *   [Any Google StreetViewPanorama events](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanorama)
 *
 * @example
 *   <map zoom="11" center="[40.688738,-74.043871]" >
 *     <street-view-panorama
 *       click-to-go="true"
 *       disable-default-ui="true"
 *       disable-double-click-zoom="true"
 *       enable-close-button="true"
 *       pano="my-pano"
 *       position="40.688738,-74.043871"
 *       pov="{heading:0, pitch: 90}"
 *       scrollwheel="false"
 *       visible="true">
 *     </street-view-panorama>
 *   </map>
 */
/* global google, document */
(function() {
  'use strict';

  var streetViewPanorama = function(Attr2MapOptions, NgMap) {
    var parser = Attr2MapOptions;

    var getStreetViewPanorama = function(map, options, events) {
      var svp, container;
      if (options.container) {
        container = document.getElementById(options.container);
        container = container || document.querySelector(options.container);
      }
      if (container) {
        svp = new google.maps.StreetViewPanorama(container, options);
      } else {
        svp = map.getStreetView();
        svp.setOptions(options);
      }

      for (var eventName in events) {
        eventName &&
          google.maps.event.addListener(svp, eventName, events[eventName]);
      }
      return svp;
    };

    var linkFunc = function(scope, element, attrs) {
      var filtered = parser.filter(attrs);
      var options = parser.getOptions(filtered, {scope: scope});
      var controlOptions = parser.getControlOptions(filtered);
      var svpOptions = angular.extend(options, controlOptions);

      var svpEvents = parser.getEvents(scope, filtered);
      console.log('street-view-panorama',
        'options', svpOptions, 'events', svpEvents);

      NgMap.getMap().then(function(map) {
        var svp = getStreetViewPanorama(map, svpOptions, svpEvents);

        map.setStreetView(svp);
        (!svp.getPosition()) && svp.setPosition(map.getCenter());
        google.maps.event.addListener(svp, 'position_changed', function() {
          if (svp.getPosition() !== map.getCenter()) {
            map.setCenter(svp.getPosition());
          }
        });
        //needed for geo-callback
        var listener =
          google.maps.event.addListener(map, 'center_changed', function() {
            svp.setPosition(map.getCenter());
            google.maps.event.removeListener(listener);
          });
      });

    }; //link

    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],
      link: linkFunc
    };

  };
  streetViewPanorama.$inject = ['Attr2MapOptions', 'NgMap'];

  angular.module('ngMap').directive('streetViewPanorama', streetViewPanorama);
})();

},{}]},{},[1]);
