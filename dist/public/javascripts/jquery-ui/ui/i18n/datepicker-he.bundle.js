(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Hebrew initialisation for the UI Datepicker extension. */
/* Written by Amir Hardon (ahardon at gmail dot com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['he'] = {
	closeText: 'סגור',
	prevText: '&#x3C;הקודם',
	nextText: 'הבא&#x3E;',
	currentText: 'היום',
	monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני',
	'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
	monthNamesShort: ['ינו','פבר','מרץ','אפר','מאי','יוני',
	'יולי','אוג','ספט','אוק','נוב','דצמ'],
	dayNames: ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'],
	dayNamesShort: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
	dayNamesMin: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['he']);

return datepicker.regional['he'];

}));

},{}]},{},[1]);
