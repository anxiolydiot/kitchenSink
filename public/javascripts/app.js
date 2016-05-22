angular.module('goAtIt', ['ui.router', 'firebase','ngTable', 'ngMap', 'angularCSS','btford.socket-io','btford.modal'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$cssProvider',function($stateProvider, $urlRouterProvider, $locationProvider,$cssProvider) {
$urlRouterProvider.otherwise('/');



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
      controller: 'homeController',
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
      controller: 'chatController',
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
    },
    // 'fireBase@home':{
    //   templateUrl: '/fireBasePartial.html',
    //   controller: 'fireBaseController'

    // }

  }

})
.state('firebase', {
  url: '/firebase',
  templateUrl: '/firebasePartial.html',
  controller: 'fireBaseController' 
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
