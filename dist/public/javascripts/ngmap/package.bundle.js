(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// package metadata file for Meteor.js
var packageName = 'tallyb:ngmap';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.16.8';
var summary = '"The Simplest AngularJs Google Maps V3 Directive Module"';
var gitLink = 'https://github.com/allenhwkim/angularjs-google-maps';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

    api.use('angular:angular@1.2.0', where); // Dependencies

    api.addFiles('build/scripts/ng-map.js', where); // Files in use
});

},{}]},{},[1]);
