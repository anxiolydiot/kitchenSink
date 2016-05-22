angular.module('goAtIt', ['firebase'])
  .controller('fireBaseController', function($scope, $http, $location, $firebaseObject) {


      console.log($firebaseObject);


 var ref = new Firebase("https://tapiocasushi.firebaseio.com/whatever");


   var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  });



  // var rootRef = Firebase.database().ref();
  // create a synchronized array
  // $scope.messages = $firebaseArray(firebaseRef.default);
  // // add new items to the array
  // // the message is automatically added to our Firebase database!
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

        
     
