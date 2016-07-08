(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var angular = require('./public/javascripts/angular/angular.js');
// var request = require('./node_modules/browser-request/index.js');
// var ngTable = require('./node_modules/ng-table/dist/ng-table.js');
// var firebase = require('./public/javascripts/firebase/firebase.js');
// require('./public/javascripts/angular-css/angular-css.js');
// require('./node_modules/angular-ui-router/release/angular-ui-router.js');
// var app = require('./public/javascripts/app.js');
// var appRoutes = require('./public/javascripts/appRoutes.js');
// var angularfire = require('./public/javascripts/angularfire/dist/angularfire.js');
// var angModal = require('./public/javascripts/services/angModal.js');
// var chatSocket = require('./public/javascripts/services/chatSocket.js');
// var ctrlShare = require('./public/javascripts/services/ctrlShare.js');
// var ranFactory = require('./public/javascripts/services/ranFactory.js');
// var testDir  = require('./public/javascripts/services/testDir.js');
// var modal = require('./public/javascripts/angular-modal/modal.js');
// var fireBaseController = require('./public/javascripts/controllers/fireBaseController.js');
// var homeController = require('./public/javascripts/controllers/homeController.js');
// var chatController = require('./public/javascripts/controllers/chatController.js');
// var cheerio = require('./node_modules/cheerio/lib/cheerio.js');


var req = require('./public/javascripts/req.js');
var app = require('./public/javascripts/app.js');
var appRoutes = require('./public/javascripts/appRoutes.js');
var angModal = require('./public/javascripts/services/angModal.js');
var chatSocket = require('./public/javascripts/services/chatSocket.js');
var ctrlShare = require('./public/javascripts/services/ctrlShare.js');
var ranFactory = require('./public/javascripts/services/ranFactory.js');
var testDir  = require('./public/javascripts/services/testDir.js');
var fireBaseController = require('./public/javascripts/controllers/fireBaseController.js');
var homeController = require('./public/javascripts/controllers/homeController.js');
var chatController = require('./public/javascripts/controllers/chatController.js');

},{"./public/javascripts/app.js":2,"./public/javascripts/appRoutes.js":3,"./public/javascripts/controllers/chatController.js":4,"./public/javascripts/controllers/fireBaseController.js":5,"./public/javascripts/controllers/homeController.js":6,"./public/javascripts/req.js":7,"./public/javascripts/services/angModal.js":8,"./public/javascripts/services/chatSocket.js":9,"./public/javascripts/services/ctrlShare.js":10,"./public/javascripts/services/ranFactory.js":11,"./public/javascripts/services/testDir.js":12}],2:[function(require,module,exports){

angular.module('goAtIt', ['firebase','ui.router', 'angularCSS','btford.socket-io','btford.modal'])

.constant('FirebaseUrl', 'https://tapiocasushi.firebaseio.com/');

},{}],3:[function(require,module,exports){

angular.module('goAtIt')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$cssProvider', '$firebaseRefProvider',function($stateProvider, $urlRouterProvider, $locationProvider,$cssProvider, $firebaseRefProvider, FirebaseUrl) {
$urlRouterProvider.otherwise('/');


var x = 'https://tapiocasushi.firebaseio.com/';



  $firebaseRefProvider.registerUrl({
    default: x,
    test: x + 'whatever',
    messages: x + 'messages'

  });



  // $firebaseRefProvider.registerUrl({
  //   default: FirebaseUrl,
  //   test: FirebaseUrl + 'whatever',
  //   mesages: FirebaseUrl + 'messages'

  // });




// $firebaseRefProvider.registerUrl('https://goatit.firebaseio.com');

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
        // media: false,
        persist: true,
        preload: true,
        // bustCache: false,
        // weight: 0
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
  // resolve: {
  //     user: function($firebaseAuthService) {
  //       return $firebaseAuthService.$waitForAuth();
  //     }
  //   } 
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

},{}],4:[function(require,module,exports){
angular.module('goAtIt')
  .controller('chatController', function($scope, $http, $location,chatSocket, say, ranFactory) {
      var chatCtrl = this;



      // request('https://news.ycombinator.com', function (error, response, html) {
      //   if (!error && response.statusCode == 200) {
      //     var $ = cheerio.load(html);
      //     $('span.comhead').each(function(i, element){
      //       var a = $(this).prev();
      //       var rank = a.parent().parent().text();
      //       var title = a.text();
      //       var url = a.attr('href');
      //       var subtext = a.parent().parent().next().children('.subtext').children();
      //       var points = $(subtext).eq(0).text();
      //       var username = $(subtext).eq(1).text();
      //       var comments = $(subtext).eq(2).text();
      //       var parsedDate = {
      //         rank: parseInt(rank),
      //         title: title,
      //         url: url,
      //         points: parseInt(points),
      //         username: username,
      //         comments: parseInt(comments)
      //       };
      //       console.log(parsedData);
      //     });
      //   }
      // });

      chatCtrl.say = say;

      chatSocket.connect();

      // chatCtrl.changeThis = function(){
      //   say.whoThis.tellMe().then(function(){
      //       say.whoThat.tellMe();

      //   });


        say.aThing.pudding= "{{chatCtrl.say.message}}";
        // say.aThing.cake= "{{chatCtrl.say.cake}}";
        // say.aThing.toast = "{{chatCtrl.say.toast}}";



        $scope.toFirebase = say.messages;
        $scope.addMessage = say.addMessage;
        $scope.addFbMessage = say.addFbMessage;

        // $scope.$watch('msg', function (x){
        //   $scope.id = x;


        // });




      // };

      $scope.messages =[];

      $http.get ('/getMsg').then(function(messages) {
          console.log(messages);
    });


      $scope.sendMessage = function(msg){
        if(msg !== null && msg !== '')
          chatSocket.emit('message', {message: msg});
        $scope.msg = '';
      };

     chatSocket.on('message', function (data){
          $scope.messages.push(data.message);
          // $scope.toFirebase.push(data.message);
          console.log($scope.messages);
          console.log($scope.toFirebase);
          say.messages.$add({
            text: data.message

            });

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

},{}],5:[function(require,module,exports){


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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
var req = function (){

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      var rank = a.parent().parent().text();
      var title = a.text();
      var url = a.attr('href');
      var subtext = a.parent().parent().next().children('.subtext').children();
      var points = $(subtext).eq(0).text();
      var username = $(subtext).eq(1).text();
      var comments = $(subtext).eq(2).text();
      var parsedDate = {
        rank: parseInt(rank),
        title: title,
        url: url,
        points: parseInt(points),
        username: username,
        comments: parseInt(comments)
      };
      console.log(parsedData);
    });
  }
  return parsedData;

});


}
module.exports = req;

},{}],8:[function(require,module,exports){
angular.module('goAtIt')
.factory('angModal', ['btfModal', function(btfModal){

return btfModal({
  controller: 'homeController',
  templateUrl: 'angModal.html'
});


}]);
},{}],9:[function(require,module,exports){
angular.module('goAtIt')
.factory('chatSocket', ['socketFactory', function(socketFactory){

return socketFactory();


}]);
},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){

var req = require('../req.js')
angular.module('goAtIt')
.service('ranServe', function () {
  var ranS = this;



return
 req()
;
});

},{"../req.js":7}],12:[function(require,module,exports){
angular.module('goAtIt')
.directive ('where', function(){
return{

restrict: 'E',
template: '<div> where is where <div>'


};

});

},{}]},{},[1]);
