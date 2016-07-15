angular.module('goAtIt')
  .controller('chatController', function($scope, $http, $location,chatSocket, say, ranFactory) {
      var chatCtrl = this;



      // request('https://news.ycombinator.com', function (error, response, html) {
      //   if (!error && response.statusCode == 200) {
      //     var $ = cheerio.load(html);
      //     $('span.comhead').each(function(i, element){
      //       var a = $(this).prev();
      //       var rank = a.parent().parent().text();
      //       var title = a.text();
      //       var url = a.attr('href');
      //       var subtext = a.parent().parent().next().children('.subtext').children();
      //       var points = $(subtext).eq(0).text();
      //       var username = $(subtext).eq(1).text();
      //       var comments = $(subtext).eq(2).text();
      //       var parsedDate = {
      //         rank: parseInt(rank),
      //         title: title,
      //         url: url,
      //         points: parseInt(points),
      //         username: username,
      //         comments: parseInt(comments)
      //       };
      //       console.log(parsedData);
      //     });
      //   }
      // });

      chatCtrl.say = say;

      chatSocket.connect();

      // chatCtrl.changeThis = function(){
      //   say.whoThis.tellMe().then(function(){
      //       say.whoThat.tellMe();

      //   });


        say.aThing.pudding= "{{chatCtrl.say.message}}";
        // say.aThing.cake= "{{chatCtrl.say.cake}}";
        // say.aThing.toast = "{{chatCtrl.say.toast}}";



        $scope.toFirebase = say.messages;
        $scope.addMessage = say.addMessage;
        $scope.addFbMessage = say.addFbMessage;

        // $scope.$watch('msg', function (x){
        //   $scope.id = x;


        // });




      // };

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
          // $scope.toFirebase.push(data.message);
          console.log($scope.messages);
          console.log($scope.toFirebase);
          say.messages.$add({
            text: data.message

            });

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
