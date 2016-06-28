(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['is'] = {
	closeText: 'Loka',
	prevText: '&#x3C; Fyrri',
	nextText: 'Næsti &#x3E;',
	currentText: 'Í dag',
	monthNames: ['Janúar','Febrúar','Mars','Apríl','Maí','Júní',
	'Júlí','Ágúst','September','Október','Nóvember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maí','Jún',
	'Júl','Ágú','Sep','Okt','Nóv','Des'],
	dayNames: ['Sunnudagur','Mánudagur','Þriðjudagur','Miðvikudagur','Fimmtudagur','Föstudagur','Laugardagur'],
	dayNamesShort: ['Sun','Mán','Þri','Mið','Fim','Fös','Lau'],
	dayNamesMin: ['Su','Má','Þr','Mi','Fi','Fö','La'],
	weekHeader: 'Vika',
	dateFormat: 'dd.mm.yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['is']);

return datepicker.regional['is'];

}));

},{}]},{},[1]);
