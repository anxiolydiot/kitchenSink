


require('angular').module('goAtIt', [
require('firebase').name,
require('angular-socket-io').name,
require('angular-modal').name,
require('angular-animate').name,
require('angularfire').name,
require('request').name
]);


// angular.module('goAtIt', [require('firebase').name
// // ,'ui.router', 'angularCSS','btford.socket-io','btford.modal'
// ])

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

angular.module('goAtIt')
.factory('angModal', ['btfModal', function(btfModal){

return btfModal({
  controller: 'homeController',
  templateUrl: 'angModal.html'
});


}]);
angular.module('goAtIt')
.factory('chatSocket', ['socketFactory', function(socketFactory){

return socketFactory();


}]);
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

angular.module('goAtIt')
.factory('angModal', ['btfModal', function(btfModal){

return btfModal({
  controller: 'homeController',
  templateUrl: 'angModal.html'
});


}]);angular.module('goAtIt')
.factory('chatSocket', ['socketFactory', function(socketFactory){

return socketFactory();


}]);angular.module('goAtIt')
.service('say', function Say($firebaseArray, $firebaseRef) {

  var say = this;

  say.messages = $firebaseArray($firebaseRef.messages);

    say.addMessage = function  (){
        console.log('add messages ran');

      say.messages.$add({
          text: this.newMessageText


        });

      console.log("fbmessages ran");



    };



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


  });

var req = require('../req.js')
angular.module('goAtIt')
.service('ranServe', function () {
  var ranS = this;



return
 req()
;
});
angular.module('goAtIt')
.directive ('where', function(){
return{

restrict: 'E',
template: '<div> where is where <div>'


};

});

var req = require('../req.js')
angular.module('goAtIt')
.service('ranServe', function () {
  var ranS = this;



return
 req()
;
});

angular.module('goAtIt')
.directive ('where', function(){
return{

restrict: 'E',
template: '<div> where is where <div>'


};

});

angular.module('goAtIt')
  .controller('chatController', function($scope, $http, $location, chatSocket, say, ranFactory) {
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



        say.aThing.pudding= "{{chatCtrl.say.message}}";



        $scope.toFirebase = say.messages;
        $scope.addMessage = say.addMessage;
        $scope.addFbMessage = say.addFbMessage;



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

      $scope.$on('$locationChangeStart', function(event){
        chatSocket.disconnect(true);
      });

});


angular.module('goAtIt')


  .controller('fireBaseController', function($scope, $http, $location, $firebaseArray, $firebaseRef, say, $controller) {

    var fireBaseCtrl = this;

    $scope.messages = say.messages;
    $scope.addMessage = say.addMessage;
    $scope.addFbMessage = say.addFbMessage;




});angular.module('goAtIt')
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
