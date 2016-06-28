(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


angular.module('goAtIt')




  .controller('fireBaseController', function($scope, $http, $location, $firebaseArray, $firebaseRef, say, $controller) {

    var fireBaseCtrl = this;
    // var chatC = $controller('chatController', {$scope: $scope});

    // fireBaseCtrl.say = say;

    // var auth = $firebaseAuth($firebaseRef);

    $scope.messages = say.messages;
    $scope.addMessage = say.addMessage;
    $scope.addFbMessage = say.addFbMessage;


    // $scope.messages = $firebaseArray($firebaseRef.messages);

    // $scope.addMessage = function (){

    //   $scope.messages.$add({
    //       text: $scope.newMessageText

    //   });
    // };


    // vm.messages = $firebaseArray($firebaseRef.messages);

    // vm.addMessage = function (){

    //   vm.messages.$add({
    //       text: $scope.newMessageText

    //   });
    // };



  // firebase.initializeApp(config);


  // var ref = new Firebase("https://goatit.firebaseio.com/messages");

  // var rootRef = Firebase.database().ref();
  // create a synchronized array
  // $scope.messages = $firebaseArray(firebaseRef.messages);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  // $scope.addMessage = function() {
  //   $scope.messages.$add({
  //     text: $scope.newMessageText
  //   });
  // };
  // click on `index.html` above to see $remove() and $save() in action



  //   $scope.messages = $firebaseArray(ref);

  //   $scope.addMessage = function() {
  //   $scope.messages.$add({
  //     text: $scope.newMessageText
  //   });
  // };

        
     
});
},{}]},{},[1]);
