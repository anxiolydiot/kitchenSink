(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Bulgarian initialisation for the jQuery UI date picker plugin. */
/* Written by Stoyan Kyosev (http://svest.org). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['bg'] = {
	closeText: 'затвори',
	prevText: '&#x3C;назад',
	nextText: 'напред&#x3E;',
	nextBigText: '&#x3E;&#x3E;',
	currentText: 'днес',
	monthNames: ['Януари','Февруари','Март','Април','Май','Юни',
	'Юли','Август','Септември','Октомври','Ноември','Декември'],
	monthNamesShort: ['Яну','Фев','Мар','Апр','Май','Юни',
	'Юли','Авг','Сеп','Окт','Нов','Дек'],
	dayNames: ['Неделя','Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота'],
	dayNamesShort: ['Нед','Пон','Вто','Сря','Чет','Пет','Съб'],
	dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Съ'],
	weekHeader: 'Wk',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['bg']);

return datepicker.regional['bg'];

}));

},{}]},{},[1]);
