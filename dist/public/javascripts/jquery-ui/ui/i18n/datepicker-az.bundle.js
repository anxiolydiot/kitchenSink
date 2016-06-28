(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Azerbaijani (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Jamil Najafov (necefov33@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['az'] = {
	closeText: 'Bağla',
	prevText: '&#x3C;Geri',
	nextText: 'İrəli&#x3E;',
	currentText: 'Bugün',
	monthNames: ['Yanvar','Fevral','Mart','Aprel','May','İyun',
	'İyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
	monthNamesShort: ['Yan','Fev','Mar','Apr','May','İyun',
	'İyul','Avq','Sen','Okt','Noy','Dek'],
	dayNames: ['Bazar','Bazar ertəsi','Çərşənbə axşamı','Çərşənbə','Cümə axşamı','Cümə','Şənbə'],
	dayNamesShort: ['B','Be','Ça','Ç','Ca','C','Ş'],
	dayNamesMin: ['B','B','Ç','С','Ç','C','Ş'],
	weekHeader: 'Hf',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['az']);

return datepicker.regional['az'];

}));

},{}]},{},[1]);
