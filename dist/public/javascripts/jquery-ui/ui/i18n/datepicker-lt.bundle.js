(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Lithuanian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas@avalon.lt> */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['lt'] = {
	closeText: 'Uždaryti',
	prevText: '&#x3C;Atgal',
	nextText: 'Pirmyn&#x3E;',
	currentText: 'Šiandien',
	monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis',
	'Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Gruodis'],
	monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
	'Lie','Rugp','Rugs','Spa','Lap','Gru'],
	dayNames: ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],
	dayNamesShort: ['sek','pir','ant','tre','ket','pen','šeš'],
	dayNamesMin: ['Se','Pr','An','Tr','Ke','Pe','Še'],
	weekHeader: 'SAV',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['lt']);

return datepicker.regional['lt'];

}));

},{}]},{},[1]);
