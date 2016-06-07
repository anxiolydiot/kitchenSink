

angular.module('goAtIt')




  .controller('fireBaseController', function($scope, $http, $location, $firebaseArray, $firebaseRef, say, $controller) {

    var fireBaseCtrl = this;
    // var chatC = $controller('chatController', {$scope: $scope});

    // fireBaseCtrl.say = say;

    // var auth = $firebaseAuth($firebaseRef);

    $scope.messages = say.messages;
    $scope.addMessage = say.addMessage;
    $scope.addFbMessage = say.addFbMessage;


    // $scope.messages = $firebaseArray($firebaseRef.messages);

    // $scope.addMessage = function (){

    //   $scope.messages.$add({
    //       text: $scope.newMessageText

    //   });
    // };


    // vm.messages = $firebaseArray($firebaseRef.messages);

    // vm.addMessage = function (){

    //   vm.messages.$add({
    //       text: $scope.newMessageText

    //   });
    // };



  // firebase.initializeApp(config);


  // var ref = new Firebase("https://goatit.firebaseio.com/messages");

  // var rootRef = Firebase.database().ref();
  // create a synchronized array
  // $scope.messages = $firebaseArray(firebaseRef.messages);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  // $scope.addMessage = function() {
  //   $scope.messages.$add({
  //     text: $scope.newMessageText
  //   });
  // };
  // click on `index.html` above to see $remove() and $save() in action



  //   $scope.messages = $firebaseArray(ref);

  //   $scope.addMessage = function() {
  //   $scope.messages.$add({
  //     text: $scope.newMessageText
  //   });
  // };

        
     
});