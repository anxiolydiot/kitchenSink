angular.module('goAtIt')
  .controller('fireBaseController', function($scope, $http, $location, $firebaseArray, $firebaseRef) {




// var config = {
//     apiKey: "AIzaSyCFB62d8aSiR6sNbDCtNnksnqFQH45PvWs",
//     authDomain: "goatit.firebaseapp.com",
//     databaseURL: "https://goatit.firebaseio.com",
//     storageBucket: "project-3655520175602507861.appspot.com",
//   };
  

  // firebase.initializeApp(config);


  // var ref = new Firebase("https://goatit.firebaseio.com/messages");

  // var rootRef = Firebase.database().ref();
  // create a synchronized array
  $scope.messages = $firebaseArray(firebaseRef.default);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
  // click on `index.html` above to see $remove() and $save() in action



  //   $scope.messages = $firebaseArray(ref);

  //   $scope.addMessage = function() {
  //   $scope.messages.$add({
  //     text: $scope.newMessageText
  //   });
  // };

        
     
});