(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Faroese initialisation for the jQuery UI date picker plugin */
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['fo'] = {
	closeText: 'Lat aftur',
	prevText: '&#x3C;Fyrra',
	nextText: 'Næsta&#x3E;',
	currentText: 'Í dag',
	monthNames: ['Januar','Februar','Mars','Apríl','Mei','Juni',
	'Juli','August','September','Oktober','November','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Aug','Sep','Okt','Nov','Des'],
	dayNames: ['Sunnudagur','Mánadagur','Týsdagur','Mikudagur','Hósdagur','Fríggjadagur','Leyardagur'],
	dayNamesShort: ['Sun','Mán','Týs','Mik','Hós','Frí','Ley'],
	dayNamesMin: ['Su','Má','Tý','Mi','Hó','Fr','Le'],
	weekHeader: 'Vk',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fo']);

return datepicker.regional['fo'];

}));

},{}]},{},[1]);
