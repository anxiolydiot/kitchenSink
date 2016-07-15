
angular.module('goAtIt')
.factory('chatSocket', ['socketFactory', function(socketFactory){

return socketFactory();


}]);
