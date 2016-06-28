(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Tajiki (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Abdurahmon Saidov (saidovab@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['tj'] = {
	closeText: 'Идома',
	prevText: '&#x3c;Қафо',
	nextText: 'Пеш&#x3e;',
	currentText: 'Имрӯз',
	monthNames: ['Январ','Феврал','Март','Апрел','Май','Июн',
	'Июл','Август','Сентябр','Октябр','Ноябр','Декабр'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	'Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['якшанбе','душанбе','сешанбе','чоршанбе','панҷшанбе','ҷумъа','шанбе'],
	dayNamesShort: ['якш','душ','сеш','чор','пан','ҷум','шан'],
	dayNamesMin: ['Як','Дш','Сш','Чш','Пш','Ҷм','Шн'],
	weekHeader: 'Хф',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['tj']);

return datepicker.regional['tj'];

}));

},{}]},{},[1]);
