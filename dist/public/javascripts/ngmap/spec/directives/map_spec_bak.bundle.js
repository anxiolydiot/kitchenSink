(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global google, waitsFor */
/* mock Attr2Options, knowns as parser */
describe('map', function() {
  var elm, scope;

  // load the tabs code
  beforeEach(function() {
    module('ngMap');
    inject(function($rootScope, $compile) {
      elm = angular.element(
        '<map zoom="11"'+
          ' center="[40.74, -74.18]"'+ 
          ' disable-default-u-i="true"' +
          ' disable-double-click-zoom="true" '+ 
          ' draggable="false" '+
          ' draggable-cursor="help" '+
          ' dragging-cursor="move"  '+
          ' keyboard-shortcuts="false" '+ 
          ' max-zoom="12"  '+
          ' min-zoom="8"  '+
          ' tilt="45"  '+
          ' map-type-id="TERRAIN" '+
          ' zoom-control="true"  '+
          " zoom-control-options='{style:\"small\",position:\"bottom_left\"}'  "+
          ' map-type-control="true"  '+
          " map-type-control-options='{position:\"top_right\", style:\"dropdown_menu\"}', "+
          ' overview-map-control="true"  '+
          ' overview-map-control-options="{opened:true}"  '+
          ' pan-control="true"  '+
          " pan-control-options='{position:\"left_center\"}'  "+
          ' rotate-control="true"  '+
          " rotate-control-options='{position:\"right_center\"}'  "+
          ' scale-control="true"  '+
          " scale-control-options='{position:\"bottom_right\", style:\"default\"}'  "+
          ' street-view-control="true"  '+
          " street-view-control-options='{position:\"right_center\"}' "+
          '></map>');
      scope = $rootScope;
      $compile(elm)(scope);
      scope.$digest();
      waitsFor(function() {
        return scope.map;
      });
    });
  });

  it('should prepend a div tag', function() {
    var divTag = elm.find('div');
    expect(scope.map.getDiv()).toBe(divTag[0]);
  });

  it('should set map options', function() {
    expect(scope.map.getZoom()).toEqual(11);
    expect(scope.map.mapTypeId).toBe(google.maps.MapTypeId.TERRAIN);
  });

  it('should set map controls', function() {
    expect(scope.map.zoomControl).toBe(true);
    expect(scope.map.zoomControlOptions.style).toBe(google.maps.ZoomControlStyle.SMALL);
    expect(scope.map.zoomControlOptions.position).toBe(google.maps.ControlPosition.BOTTOM_LEFT);
  });

  it('should set events', function() {
    //TODO: need to test events, but don't know how to detect event in a map
  });

  it('should set observers', function() {
    //TODO: need to test observers
  });

});

},{}]},{},[1]);
