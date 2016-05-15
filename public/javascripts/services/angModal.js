angular.module('goAtIt')
.factory('angModal', ['btfModal', function(btfModal){

return btfModal({
  controller: 'homeController',
  templateUrl: 'angModal.html'
});


}]);