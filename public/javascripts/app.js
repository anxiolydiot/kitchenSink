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
      controller: 'homeController'

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
