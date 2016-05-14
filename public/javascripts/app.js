angular.module('goAtIt', ['ui.router','ngTable', 'ngMap', 'angularCSS'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$cssProvider',function($stateProvider, $urlRouterProvider, $locationProvider,$cssProvider) {
$urlRouterProvider.otherwise('/');

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

  }

})
.state('signup', {
  url: '/signup',
  templateUrl: '/partial-signUp',
  controller: '/signUpController' 
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
