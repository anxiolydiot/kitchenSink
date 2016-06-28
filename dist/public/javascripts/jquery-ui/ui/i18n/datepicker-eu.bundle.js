(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Karrikas-ek itzulia (karrikas@karrikas.com) */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['eu'] = {
	closeText: 'Egina',
	prevText: '&#x3C;Aur',
	nextText: 'Hur&#x3E;',
	currentText: 'Gaur',
	monthNames: ['urtarrila','otsaila','martxoa','apirila','maiatza','ekaina',
		'uztaila','abuztua','iraila','urria','azaroa','abendua'],
	monthNamesShort: ['urt.','ots.','mar.','api.','mai.','eka.',
		'uzt.','abu.','ira.','urr.','aza.','abe.'],
	dayNames: ['igandea','astelehena','asteartea','asteazkena','osteguna','ostirala','larunbata'],
	dayNamesShort: ['ig.','al.','ar.','az.','og.','ol.','lr.'],
	dayNamesMin: ['ig','al','ar','az','og','ol','lr'],
	weekHeader: 'As',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['eu']);

return datepicker.regional['eu'];

}));

},{}]},{},[1]);
