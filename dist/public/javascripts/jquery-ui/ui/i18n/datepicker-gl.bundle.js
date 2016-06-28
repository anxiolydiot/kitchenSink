(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Galician localization for 'UI date picker' jQuery extension. */
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['gl'] = {
	closeText: 'Pechar',
	prevText: '&#x3C;Ant',
	nextText: 'Seg&#x3E;',
	currentText: 'Hoxe',
	monthNames: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xuño',
	'Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'],
	monthNamesShort: ['Xan','Feb','Mar','Abr','Mai','Xuñ',
	'Xul','Ago','Set','Out','Nov','Dec'],
	dayNames: ['Domingo','Luns','Martes','Mércores','Xoves','Venres','Sábado'],
	dayNamesShort: ['Dom','Lun','Mar','Mér','Xov','Ven','Sáb'],
	dayNamesMin: ['Do','Lu','Ma','Mé','Xo','Ve','Sá'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['gl']);

return datepicker.regional['gl'];

}));

},{}]},{},[1]);
