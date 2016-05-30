angular.module('goAtIt')
.service('say', function Say() {

  var say = this;

  say.aThing= {
    pudding: '=',
    init: function( who, when, what, x, y, z){
      this.who = who;
      this.when = when;
      this.what= what;
      this.x = x;
      this.y = y;
      this.z= z;
  
  
    },
    tellMe : function(){
      say.aThing.cake = ('who:' + this.who + 'when:' + this.when +  'what:' + this.what);
      say.aThing.doughnut = ('who:' + this.x + 'when:' + this.y +  'what:' + this.z);
    
    },
    yThis  : function(){
      say.aThing.toast = ('who:' + this.who + 'when:' + this.when +  'what:' + this.what + 'pudding:');
    }

  };

  
  say.message = "There are too many kinds of Oreos";

  var whoThis = Object.create(say.aThing);
  var whoThat = Object.create(say.aThing);
  var whoKnows = Object.create(say.aThing);
  whoThis.init(' a ',' b ',' c ',' d ');
  whoThat.init(' s ', ' s ', ' s ', ' s ');
  whoKnows.init(1,2,3,4,5,6,7,8);
  whoThis.tellMe();
  whoThat.yThis();
  whoKnows.tellMe();
  // say.aThing.cake;



  });