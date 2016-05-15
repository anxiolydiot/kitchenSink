angular.module('goAtIt')
  .controller('homeController', function($scope, $http, $location,chatSocket) {
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

      $scope.messages =[];

      chatSocket.on('message', function(data){
          $scope.messages.push(data.message);

      });

        


});