(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name map-lazy-load
 * @param Attr2Options {service} convert html attribute to Gogole map api options
 * @description
 *  Requires: Delay the initialization of map directive
 *    until the map is ready to be rendered
 *  Restrict To: Attribute
 *
 * @attr {String} map-lazy-load
 *    Maps api script source file location.
 *    Example:
 *      'https://maps.google.com/maps/api/js'
 * @attr {String} map-lazy-load-params
 *   Maps api script source file location via angular scope variable.
 *   Also requires the map-lazy-load attribute to be present in the directive.
 *   Example: In your controller, set
 *     $scope.googleMapsURL = 'https://maps.google.com/maps/api/js?v=3.20&client=XXXXXenter-api-key-hereXXXX'
 *
 * @example
 * Example:
 *
 *   <div map-lazy-load="http://maps.google.com/maps/api/js">
 *     <map center="Brampton" zoom="10">
 *       <marker position="Brampton"></marker>
 *     </map>
 *   </div>
 *
 *   <div map-lazy-load="http://maps.google.com/maps/api/js"
 *        map-lazy-load-params="{{googleMapsUrl}}">
 *     <map center="Brampton" zoom="10">
 *       <marker position="Brampton"></marker>
 *     </map>
 *   </div>
 */
/* global window, document */
(function() {
  'use strict';
  var $timeout, $compile, src, savedHtml;

  var preLinkFunc = function(scope, element, attrs) {
    var mapsUrl = attrs.mapLazyLoadParams || attrs.mapLazyLoad;

    window.lazyLoadCallback = function() {
      console.log('Google maps script loaded:', mapsUrl);
      $timeout(function() { /* give some time to load */
        element.html(savedHtml);
        $compile(element.contents())(scope);
      }, 100);
    };

    if(window.google === undefined || window.google.maps === undefined) {
      var scriptEl = document.createElement('script');
      console.log('Prelinking script loaded,' + src);

      scriptEl.src = mapsUrl +
        (mapsUrl.indexOf('?') > -1 ? '&' : '?') +
        'callback=lazyLoadCallback';

        if (!document.querySelector('script[src="' + scriptEl.src + '"]')) {
          document.body.appendChild(scriptEl);
        }
    } else {
      element.html(savedHtml);
      $compile(element.contents())(scope);
    }
  };

  var compileFunc = function(tElement, tAttrs) {

    (!tAttrs.mapLazyLoad) && console.error('requires src with map-lazy-load');
    savedHtml = tElement.html();
    src = tAttrs.mapLazyLoad;

    /**
     * if already loaded, stop processing it
     */
    if(window.google !== undefined && window.google.maps !== undefined) {
      return false;
    }

    tElement.html('');  // will compile again after script is loaded

    return {
      pre: preLinkFunc
    };
  };

  var mapLazyLoad = function(_$compile_, _$timeout_) {
    $compile = _$compile_, $timeout = _$timeout_;
    return {
      compile: compileFunc
    };
  };
  mapLazyLoad.$inject = ['$compile','$timeout'];

  angular.module('ngMap').directive('mapLazyLoad', mapLazyLoad);
})();

},{}]},{},[1]);
