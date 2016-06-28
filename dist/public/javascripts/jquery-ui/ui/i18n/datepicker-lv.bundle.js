(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Latvian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['lv'] = {
	closeText: 'Aizvērt',
	prevText: 'Iepr.',
	nextText: 'Nāk.',
	currentText: 'Šodien',
	monthNames: ['Janvāris','Februāris','Marts','Aprīlis','Maijs','Jūnijs',
	'Jūlijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jūn',
	'Jūl','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['svētdiena','pirmdiena','otrdiena','trešdiena','ceturtdiena','piektdiena','sestdiena'],
	dayNamesShort: ['svt','prm','otr','tre','ctr','pkt','sst'],
	dayNamesMin: ['Sv','Pr','Ot','Tr','Ct','Pk','Ss'],
	weekHeader: 'Ned.',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['lv']);

return datepicker.regional['lv'];

}));

},{}]},{},[1]);
