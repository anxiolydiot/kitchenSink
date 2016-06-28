(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Macedonian i18n for the jQuery UI date picker plugin. */
/* Written by Stojce Slavkovski. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['mk'] = {
	closeText: 'Затвори',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Денес',
	monthNames: ['Јануари','Февруари','Март','Април','Мај','Јуни',
	'Јули','Август','Септември','Октомври','Ноември','Декември'],
	monthNamesShort: ['Јан','Фев','Мар','Апр','Мај','Јун',
	'Јул','Авг','Сеп','Окт','Ное','Дек'],
	dayNames: ['Недела','Понеделник','Вторник','Среда','Четврток','Петок','Сабота'],
	dayNamesShort: ['Нед','Пон','Вто','Сре','Чет','Пет','Саб'],
	dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Са'],
	weekHeader: 'Сед',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['mk']);

return datepicker.regional['mk'];

}));

},{}]},{},[1]);
