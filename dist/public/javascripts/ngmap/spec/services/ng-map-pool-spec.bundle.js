(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
describe('NgMapPool', function() {
  'use strict';
   var scope, $window, NgMapPool;

   beforeEach(module('ngMap', function($provide) { //jshint ignore:line
   }));

   beforeEach(inject(function ($rootScope, _NgMapPool_, _$window_) {
     scope = $rootScope;
     NgMapPool = _NgMapPool_, $window = _$window_;
     $window.google = {
       maps: {
         Map: function() {
          this.getDiv = function() {};
         }
       }
     };
   }));

  describe("#getMapInstance #returnMapInstance", function() {
    it('it should create a new map instance and return', function() {
      var el = {
        style: {},
        appendChild: function(){},
        getAttribute: function() {return "true";},
        currentStyle: {}
      };
      var map1, map2, map3;
      expect(NgMapPool.mapInstances.length).toEqual(0);
      map1 = NgMapPool.getMapInstance(el);
      expect(NgMapPool.mapInstances.length).toEqual(1);
      expect(map1.inUse).toEqual(true);
      map2 = NgMapPool.getMapInstance(el);
      expect(NgMapPool.mapInstances.length).toEqual(2);
      expect(map2.inUse).toEqual(true);
      map3 = NgMapPool.getMapInstance(el);
      expect(NgMapPool.mapInstances.length).toEqual(3);
      expect(map3.inUse).toEqual(true);

      NgMapPool.returnMapInstance(map1);
      NgMapPool.returnMapInstance(map2);
      expect(NgMapPool.mapInstances.length).toEqual(3);
      expect(map1.inUse).toEqual(false);
      expect(map2.inUse).toEqual(false);
      expect(map3.inUse).toEqual(true);

      var map4 = NgMapPool.getMapInstance(el);
      var map5 = NgMapPool.getMapInstance(el);
      expect(map1).toEqual(map4);
      expect(map2).toEqual(map5);
    });
  });

});

},{}]},{},[1]);
