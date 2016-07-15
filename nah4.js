var browserify = require('browserify'),
  gulp = require('gulp'),
  fs = require('fs'),
  expect = require('gulp-expect-file'),
  gulpUtil = require('gulp-util'),
  resolve = require('browser-resolve'),
  b = browserify({
  paths: [
    __dirname + '/'
  ]
});


gulp.task('exposeLibs', function() {


    b.require((__dirname+'/node_modules/angular/angular.js'), { expose: 'angular' })
    .require((__dirname+'/node_modules/firebase/lib/firebase-node.js'), { expose: 'firebase' })
    .require((__dirname+'/node_modules/angular-socket-io/socket.js'), {expose: 'angular-socket-io'})
    .require((__dirname+'/node_modules/angular-modal/modal.js'), {expose: 'angular-modal'})
    .require((__dirname+'/node_modules/angularfire/dist/angularfire.js'), {expose: 'angularfire'})
    .require((__dirname+'/node_modules/browser-request/index.js'), {expose: 'request'})
    .bundle(function(err, libs) {
        fs.writeFile('./public/javascripts/libs.js', libs);
    });
  });




gulp.task('useLibs', function() {
    b.require((__dirname +'/mainApp'))
    .external('angular')
    .external('firebase')
    .external('angular-socket-io')
    .external('angular-modal')
    .external('angularfire')
    .external('request')
    .bundle(function(err, main) {
        fs.writeFile('./public/javascripts/mainB.js', main);
    });
});


gulp.task('default', ['exposeLibs','useLibs']);
