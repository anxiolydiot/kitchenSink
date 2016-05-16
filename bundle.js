(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


// var x = require('autoprefixer-loader');
// var exportsLoader = require('exports-loader');
// var fileLoader = require('file-loader');
// var importLoader =  require('imports-loader');
// var urlLoader = require('url-loader') ;
// var less = require('less');
// var cssLoader = require('css-loader');
// var lessLoader = require('less-loader');
// var drag = require('angular-drag-drop');


var chatController = require('./public/javascripts/controllers/chatController.js');
var chatController = require('./public/javascripts/controllers/homeController.js');
},{"./public/javascripts/controllers/chatController.js":2,"./public/javascripts/controllers/homeController.js":3}],2:[function(require,module,exports){
angular.module('goAtIt')
  .controller('chatController', function($scope, $http, $location,chatSocket) {
      chatSocket.connect();

      $scope.messages =[];
     

      $scope.sendMessage = function(msg){
        if(msg !== null && msg !== '')
          chatSocket.emit('message', {message: msg});
        $scope.msg = '';
      };

     chatSocket.on('message', function (data){
          $scope.messages.push(data.message);
          console.log($scope.messages);

      });


    //  chatSocket.on('users', function (data){
    //   $scope.users = data.user;
    
    // });

     // chatSocket.on('add-user', function (data){
     //  $scope.users.push(data.username);
     //  $scope.messages.push({message: 'just arrived'});

     //  });

     // chatSocket.on('remove-user', function (data){

     //  $scope.users.splice($scope.user.indexOf(data.username),1);
     //  $scope.messages.push ({username: data.username, message: 'just peaced out'});

     // });
      




      $scope.$on('$locationChangeStart', function(event){
        chatSocket.disconnect(true);
      });

      

      

        


});
},{}],3:[function(require,module,exports){
angular.module('goAtIt')
  .controller('homeController', function($scope, $http, $location,angModal) {
      var vm = this;

      $scope.things = [
      { name: 'aaa', type: 3},
      { name: 'aaa', type: 3},
      { name: 'aaa', type: 3},
      { name: 'aaa', type: 3}

      ];



      function Clash(who, when, what, where) {
      this.who = who;
      this.when = when;
      this.what = what;
      this.where = where;
}

      var any = new Clash (//read,//read,//read,//read
     );

      angModal.showModal = angModal.activate;
 
        


});
},{}]},{},[1]);
