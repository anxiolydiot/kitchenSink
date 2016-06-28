(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimić. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['sr'] = {
	closeText: 'Затвори',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Данас',
	monthNames: ['Јануар','Фебруар','Март','Април','Мај','Јун',
	'Јул','Август','Септембар','Октобар','Новембар','Децембар'],
	monthNamesShort: ['Јан','Феб','Мар','Апр','Мај','Јун',
	'Јул','Авг','Сеп','Окт','Нов','Дец'],
	dayNames: ['Недеља','Понедељак','Уторак','Среда','Четвртак','Петак','Субота'],
	dayNamesShort: ['Нед','Пон','Уто','Сре','Чет','Пет','Суб'],
	dayNamesMin: ['Не','По','Ут','Ср','Че','Пе','Су'],
	weekHeader: 'Сед',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sr']);

return datepicker.regional['sr'];

}));

},{}]},{},[1]);
