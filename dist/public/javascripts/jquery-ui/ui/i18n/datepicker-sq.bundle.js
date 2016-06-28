(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Albanian initialisation for the jQuery UI date picker plugin. */
/* Written by Flakron Bytyqi (flakron@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['sq'] = {
	closeText: 'mbylle',
	prevText: '&#x3C;mbrapa',
	nextText: 'Përpara&#x3E;',
	currentText: 'sot',
	monthNames: ['Janar','Shkurt','Mars','Prill','Maj','Qershor',
	'Korrik','Gusht','Shtator','Tetor','Nëntor','Dhjetor'],
	monthNamesShort: ['Jan','Shk','Mar','Pri','Maj','Qer',
	'Kor','Gus','Sht','Tet','Nën','Dhj'],
	dayNames: ['E Diel','E Hënë','E Martë','E Mërkurë','E Enjte','E Premte','E Shtune'],
	dayNamesShort: ['Di','Hë','Ma','Më','En','Pr','Sh'],
	dayNamesMin: ['Di','Hë','Ma','Më','En','Pr','Sh'],
	weekHeader: 'Ja',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sq']);

return datepicker.regional['sq'];

}));

},{}]},{},[1]);
