module.exports =
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
