var browserify = require('browserify'),
  gulp = require('gulp'),
  fs = require('fs'),
  expect = require('gulp-expect-file'),
  gulpUtil = require('gulp-util')

gulp.task('exposeLibs', function() {

browserify()
    .require(require.resolve('./node_modules/angular/angular.js'), { expose: 'angular' })
    .require(require.resolve('./node_modules/firebase/lib/firebase-node.js'), { expose: 'firebase' })
    .require(require.resolve('./node_modules/angular-socket-io/socket.js'), {expose: 'angular-socket-io'})
    .require(require.resolve('./node_modules/angular-modal/modal.js'), {expose: 'angular-modal'})
    .require(require.resolve('./node_modules/angularfire/dist/angularfire.js'), {expose: 'angularfire'})
    .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    .on('error', gulpUtil.log)
    .bundle(function(err, libs) {
        fs.writeFile('./public/javascripts/libs.js', libs);
    });




browserify()
    .require(require.resolve('./concatMain.js'))
    .external('angular')
    .external('firebase')
    .external('angular-socket-io')
    .external('angular-modal')
    .external('angularfire')
    .external('request')
    .on('error', gulpUtil.log)
    .bundle(function(err, main) {
        fs.writeFile('./public/javascripts/mainB.js', main);
    });
});


gulp.task('default', ['exposeLibs']);
