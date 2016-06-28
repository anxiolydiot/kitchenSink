(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global jasmine */
describe('GeoCoder', function () {
  'use strict';
  var scope, geoCoder;

  beforeEach(module('ngMap'));
  beforeEach(inject(function ($rootScope, GeoCoder) {
    scope = $rootScope, geoCoder = GeoCoder;
    google.maps.Geocoder = jasmine.createSpy();
  }));

  describe('geocode function', function () {

    it('Should return a promise', function () {
      var GoodResponse = function (params, callback) { callback('GOOD', 'OK'); };
      google.maps.Geocoder.prototype.geocode = jasmine.createSpy().and.callFake(GoodResponse);
      var promise = geoCoder.geocode('Canada');
      expect(typeof promise.then).toBe('function');
    });

    it('Should call geocoder.geocode to retrieve good results', function () {
      var GoodResponse = function (params, callback) { callback('GOOD', 'OK'); };
      google.maps.Geocoder.prototype.geocode = jasmine.createSpy().and.callFake(GoodResponse);
      var okMock = jasmine.createSpy();
      geoCoder.geocode('Canada').then(okMock);
      scope.$apply();
      expect(okMock).toHaveBeenCalledWith('GOOD');
    });

    it('Should call geocoder.geocode to retrieve  bad results', function () {
      var BadResponse = function (params, callback) { callback('BAD', 'ERROR'); };
      google.maps.Geocoder.prototype.geocode = jasmine.createSpy().and.callFake(BadResponse);
      var okMock = jasmine.createSpy();
      var errorMock = jasmine.createSpy();
      geoCoder.geocode('Canada').then(okMock, errorMock);
      scope.$apply();
      expect(okMock).not.toHaveBeenCalled();
      expect(errorMock).toHaveBeenCalledWith('ERROR');
    });
  });
});

},{}]},{},[1]);
