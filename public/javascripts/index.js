
require('angular')
require('firebase')
require('angular-socket-io')
require('angular-modal')
require('angular-animate')
require('angularfire')
require('browser-request')

var angModal = require('public/javascripts/services/angModal.js');
var chatSocket = require('public/javascripts/services/chatSocket.js');
var ctrlShare = require('public/javascripts/services/ctrlShare.js');
var ranFactory = require('public/javascripts/services/ranFactory.js');
var testDir  = require('public/javascripts/services/testDir.js');
var fireBaseController = require('public/javascripts/controllers/fireBaseController.js');
var homeController = require('public/javascripts/controllers/homeController.js');
var chatController = require('public/javascripts/controllers/chatController.js');
var req = require('public/javascripts/req.js');

module.exports = angular.module('goAtIt', ['firebase','ui.router','ngTable', 'angularCSS','btford.socket-io','btford.modal'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$cssProvider', '$firebaseRefProvider',function($stateProvider, $urlRouterProvider, $locationProvider,$cssProvider, $firebaseRefProvider, FirebaseUrl) {
$urlRouterProvider.otherwise('/');


var x = 'https://tapiocasushi.firebaseio.com/';



  $firebaseRefProvider.registerUrl({
    default: x,
    test: x + 'whatever',
    messages: x + 'messages'

  });

$stateProvider
.state('home', {
  url: '/home',
  views: {
    '': {
      templateUrl: '/homePartial.html',
      controller: 'homeController'
        },
    'main@home': {
      templateUrl: '/mainPartial.html',
      controller: 'homeController as homeCtrl',
      css:
      {
        href: '/stylesheets/mainPartialStyle.css',
        rel: 'stylesheet',
        type: 'text/css',
        persist: true,
        preload: true,

      }

    },
    'chat@home': {
      templateUrl: '/chatPartial.html',
      controller: 'chatController as chatCtrl',
      css:
      {
        href: '/stylesheets/chatPartialStyle.css',
        rel: 'stylesheet',
        type: 'text/css',
        persist: true,
        preload: true,
      }
    },
    'modal@home':{
      templateUrl: '/angModal.html',
      controller: 'homeController',
    }

  }

})
.state('firebase', {
  url: '/firebase',
  templateUrl: '/firebasePartial.html',
  controller: 'fireBaseController as fireBaseCtrl'
});


$locationProvider.html5Mode(true);

  angular.extend($cssProvider.defaults, {
    container: 'head',
    method: 'append',
    persist: false,
    preload: false,
    bustCache: false
  });

}]);
