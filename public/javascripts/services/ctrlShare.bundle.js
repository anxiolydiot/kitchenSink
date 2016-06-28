(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

angular.module('goAtIt')
.service('say', function Say($firebaseArray, $firebaseRef) {

  var say = this;

  say.messages = $firebaseArray($firebaseRef.messages);

    say.addMessage = function  (){
        console.log('add messages ran');
      say.messages.$add({
          text: this.newMessageText


        });

    // say.addFbMessage = function(){



    //   say.messages.$add({
    //     text: this.msg

    //   });
      console.log("fbmessages ran");
      console.log(text);
      console.log(this.msg);

    };
    // };



  say.aThing= {
    pudding: '=',
    init: function( who, when, what, x, y, z){
      this.who = who;
      this.when = when;
      this.what= what;
      this.x = x;
      this.y = y;
      this.z= z;
      this.topping = say.aThing.aNew;


    },
    tellMe : function(){
      say.aThing.cake = ('who:' + this.who + 'when:' + this.when +  'what:' + this.what);
      say.aThing.doughnut = ('who:' + this.x + 'when:' + this.y +  'what:' + this.z);

    },
    yThis  : function(){
      say.aThing.toast = ('who:' + this.who + 'when:' + this.when +  'what:' + this.what + 'pudding:');
    },
    aNew : function (){
      (say.aThing).prototype.syrup = "maple";
      return this;
    }

  };




  say.message = "There are too many kinds of Oreos";

  var whoThis = Object.create(say.aThing);
  var whoThat = Object.create(say.aThing);
  var whoKnows = Object.create(say.aThing);
  whoThis.init(' a ',' b ',' c ',' d ');
  whoThat.init(' s ', ' s ', ' s ', ' s ');
  whoKnows.init(1,2,3,4,5,6,7,8);
  whoThis.tellMe();
  whoThat.yThis();
  whoKnows.tellMe();
  // say.aThing.cake;



  });
},{}]},{},[1]);
