var browserify = require('browserify'),
gulp = require('gulp'),
fs = require('fs');

gulp.task('exposeBundle', function() {

browserify()
    .require(require.resolve('./node_modules/angular/angular.js'), { expose: 'angular' })
    .require(require.resolve('./node_modules/firebase/lib/firebase-node.js'), { expose: 'firebase' })
    .require(require.resolve('./node_modules/angular-socket-io/socket.js'), {expose: 'angular-socket-io'})
    .require(require.resolve('./node_modules/angular-modal/modal.js'), {expose: 'angular-modal'})
    .require(require.resolve('./node_modules/angularfire/dist/angularfire.js'), {expose: 'angularfire'})
    .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    .require(require.resolve('./public/javascripts/req.js'), {expose: 'req'})
    .require(require.resolve('./public/javascripts/app.js'), {expose: 'app'})
    // .require(require.resolve('./public/javascripts/appRoutes.js'), {expose: 'appRoutes'})
    // .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    // .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    // .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    // .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    // .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    // .require(require.resolve('./node_modules/browser-request/index.js'), {expose: 'request'})
    //continue listing shimed paths for exposure
    .bundle(function(err, libs) {
        fs.writeFile('./dist/libs.js', libs);
    });

browserify()
    .require(require.resolve('./mainBmain.js'))
    .external('angular')
    .external('firebase')
    .external('angular-socket-io')
    .external('angular-modal')
    .external('angularfire')
    .external('request')
    .external('req')
    .external('app')
    // .external('appRoutes')

    .bundle(function(err, main) {
        fs.writeFile('./public/javascripts/mainB.js', main);
    });
});

gulp.task('default', ['exposeBundle']);
