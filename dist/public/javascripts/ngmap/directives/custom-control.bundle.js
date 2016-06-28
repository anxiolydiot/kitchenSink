(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc directive
 * @name custom-control
 * @param Attr2Options {service} convert html attribute to Gogole map api options
 * @param $compile {service} AngularJS $compile service
 * @description
 *   Build custom control and set to the map with position
 *
 *   Requires:  map directive
 *
 *   Restrict To:  Element
 *
 * @attr {String} position position of this control
 *        i.e. TOP_RIGHT
 * @attr {Number} index index of the control
 * @example
 *
 * Example:
 *  <map center="41.850033,-87.6500523" zoom="3">
 *    <custom-control id="home" position="TOP_LEFT" index="1">
 *      <div style="background-color: white;">
 *        <b>Home</b>
 *      </div>
 *    </custom-control>
 *  </map>
 *
 */
(function() {
  'use strict';
  var parser, $compile, NgMap;

  var linkFunc = function(scope, element, attrs, mapController) {
    mapController = mapController[0]||mapController[1];
    var filtered = parser.filter(attrs);
    var options = parser.getOptions(filtered, {scope: scope});
    var events = parser.getEvents(scope, filtered);

    /**
     * build a custom control element
     */
    var customControlEl = element[0].parentElement.removeChild(element[0]);
    $compile(customControlEl.innerHTML.trim())(scope);

    /**
     * set events
     */
    for (var eventName in events) {
      google.maps.event.addDomListener(customControlEl, eventName, events[eventName]);
    }

    mapController.addObject('customControls', customControlEl);
    var position = options.position;
    mapController.map.controls[google.maps.ControlPosition[position]].push(customControlEl);

    element.bind('$destroy', function() {
      mapController.deleteObject('customControls', customControlEl);
    });
  };

  var customControl =  function(Attr2MapOptions, _$compile_, _NgMap_)  {
    parser = Attr2MapOptions, $compile = _$compile_, NgMap = _NgMap_;

    return {
      restrict: 'E',
      require: ['?^map','?^ngMap'],
      link: linkFunc
    }; // return
  };
  customControl.$inject = ['Attr2MapOptions', '$compile', 'NgMap'];

  angular.module('ngMap').directive('customControl', customControl);
})();

},{}]},{},[1]);
