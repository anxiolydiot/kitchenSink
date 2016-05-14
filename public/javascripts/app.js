angular.module('goAtIt', ['ui.router','ngTable', 'ngMap'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
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

}]);