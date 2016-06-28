(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Belarusian initialisation for the jQuery UI date picker plugin. */
/* Written by Pavel Selitskas <p.selitskas@gmail.com> */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['be'] = {
	closeText: 'Зачыніць',
	prevText: '&larr;Папяр.',
	nextText: 'Наст.&rarr;',
	currentText: 'Сёньня',
	monthNames: ['Студзень','Люты','Сакавік','Красавік','Травень','Чэрвень',
	'Ліпень','Жнівень','Верасень','Кастрычнік','Лістапад','Сьнежань'],
	monthNamesShort: ['Сту','Лют','Сак','Кра','Тра','Чэр',
	'Ліп','Жні','Вер','Кас','Ліс','Сьн'],
	dayNames: ['нядзеля','панядзелак','аўторак','серада','чацьвер','пятніца','субота'],
	dayNamesShort: ['ндз','пнд','аўт','срд','чцв','птн','сбт'],
	dayNamesMin: ['Нд','Пн','Аў','Ср','Чц','Пт','Сб'],
	weekHeader: 'Тд',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['be']);

return datepicker.regional['be'];

}));

},{}]},{},[1]);
