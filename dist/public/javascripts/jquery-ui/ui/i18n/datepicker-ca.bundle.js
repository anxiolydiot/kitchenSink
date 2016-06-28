(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Inicialització en català per a l'extensió 'UI date picker' per jQuery. */
/* Writers: (joan.leon@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['ca'] = {
	closeText: 'Tanca',
	prevText: 'Anterior',
	nextText: 'Següent',
	currentText: 'Avui',
	monthNames: ['gener','febrer','març','abril','maig','juny',
	'juliol','agost','setembre','octubre','novembre','desembre'],
	monthNamesShort: ['gen','feb','març','abr','maig','juny',
	'jul','ag','set','oct','nov','des'],
	dayNames: ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'],
	dayNamesShort: ['dg','dl','dt','dc','dj','dv','ds'],
	dayNamesMin: ['dg','dl','dt','dc','dj','dv','ds'],
	weekHeader: 'Set',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ca']);

return datepicker.regional['ca'];

}));

},{}]},{},[1]);
