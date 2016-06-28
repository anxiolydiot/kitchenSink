(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @ngdoc service
 * @name NavigatorGeolocation
 * @description
 *  Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *  service for navigator.geolocation methods
 */
/* global google */
(function() {
  'use strict';
  var $q;

  /**
   * @memberof NavigatorGeolocation
   * @param {Object} geoLocationOptions the navigator geolocations options.
   *  i.e. { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }.
   *  If none specified, { timeout: 5000 }. 
   *  If timeout not specified, timeout: 5000 added
   * @param {function} success success callback function
   * @param {function} failure failure callback function
   * @example
   * ```
   *  NavigatorGeolocation.getCurrentPosition()
   *    .then(function(position) {
   *      var lat = position.coords.latitude, lng = position.coords.longitude;
   *      .. do something lat and lng
   *    });
   * ```
   * @returns {HttpPromise} Future object
   */
  var getCurrentPosition = function(geoLocationOptions) {
    var deferred = $q.defer();
    if (navigator.geolocation) {

      if (geoLocationOptions === undefined) {
        geoLocationOptions = { timeout: 5000 };
      }
      else if (geoLocationOptions.timeout === undefined) {
        geoLocationOptions.timeout = 5000;
      }

      navigator.geolocation.getCurrentPosition(
        function(position) {
          deferred.resolve(position);
        }, function(evt) {
          console.error(evt);
          deferred.reject(evt);
        },
        geoLocationOptions
      );
    } else {
      deferred.reject("Browser Geolocation service failed.");
    }
    return deferred.promise;
  };

  var NavigatorGeolocation = function(_$q_) {
    $q = _$q_;
    return {
      getCurrentPosition: getCurrentPosition
    };
  };
  NavigatorGeolocation.$inject = ['$q'];

  angular.module('ngMap').
    service('NavigatorGeolocation', NavigatorGeolocation);
})();

},{}]},{},[1]);
