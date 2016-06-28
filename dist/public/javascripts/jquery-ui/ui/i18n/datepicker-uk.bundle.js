(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['uk'] = {
	closeText: 'Закрити',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Сьогодні',
	monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
	'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
	monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер',
	'Лип','Сер','Вер','Жов','Лис','Гру'],
	dayNames: ['неділя','понеділок','вівторок','середа','четвер','п’ятниця','субота'],
	dayNamesShort: ['нед','пнд','вів','срд','чтв','птн','сбт'],
	dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Тиж',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['uk']);

return datepicker.regional['uk'];

}));

},{}]},{},[1]);
