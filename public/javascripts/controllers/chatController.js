angular.module('goAtIt')
  .controller('chatController', function($scope, $http, $location,chatSocket, say) {
      var chatCtrl = this;

      chatCtrl.say = say;

      chatSocket.connect();

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
          console.log($scope.messages);

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