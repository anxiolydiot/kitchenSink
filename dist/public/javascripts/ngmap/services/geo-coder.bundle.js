(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc service
 * @name GeoCoder
 * @description
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
(function() {
  'use strict';
  var $q;
  /**
   * @memberof GeoCoder
   * @param {Hash} options
   *   https://developers.google.com/maps/documentation/geocoding/#geocoding
   * @example
   * ```
   *   GeoCoder.geocode({address: 'the cn tower'}).then(function(result) {
   *     //... do something with result
   *   });
   * ```
   * @returns {HttpPromise} Future object
   */
  var geocodeFunc = function(options) {
    var deferred = $q.defer();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(options, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        deferred.resolve(results);
      } else {
        deferred.reject(status);
      }
    });
    return deferred.promise;
  };

  var GeoCoder = function(_$q_) {
    $q = _$q_;
    return {
      geocode : geocodeFunc
    };
  };
  GeoCoder.$inject = ['$q'];

  angular.module('ngMap').service('GeoCoder', GeoCoder);
})();

},{}]},{},[1]);
