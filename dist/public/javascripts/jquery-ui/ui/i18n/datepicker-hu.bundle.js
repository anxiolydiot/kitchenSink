(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Hungarian initialisation for the jQuery UI date picker plugin. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['hu'] = {
	closeText: 'bezár',
	prevText: 'vissza',
	nextText: 'előre',
	currentText: 'ma',
	monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június',
	'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún',
	'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
	dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
	dayNamesShort: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
	dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
	weekHeader: 'Hét',
	dateFormat: 'yy.mm.dd.',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hu']);

return datepicker.regional['hu'];

}));

},{}]},{},[1]);
