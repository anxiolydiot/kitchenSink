(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Indonesian initialisation for the jQuery UI date picker plugin. */
/* Written by Deden Fathurahman (dedenf@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['id'] = {
	closeText: 'Tutup',
	prevText: '&#x3C;mundur',
	nextText: 'maju&#x3E;',
	currentText: 'hari ini',
	monthNames: ['Januari','Februari','Maret','April','Mei','Juni',
	'Juli','Agustus','September','Oktober','Nopember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Agus','Sep','Okt','Nop','Des'],
	dayNames: ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
	dayNamesShort: ['Min','Sen','Sel','Rab','kam','Jum','Sab'],
	dayNamesMin: ['Mg','Sn','Sl','Rb','Km','jm','Sb'],
	weekHeader: 'Mg',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['id']);

return datepicker.regional['id'];

}));

},{}]},{},[1]);
