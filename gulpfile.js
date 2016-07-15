var libs = require('./dist/libs.js'),
source = require('vinyl-source-stream'),
gulpUtil = require('gulp-util'),
fs = require('fs'),
gulp = require('gulp'),
browserify = require('browserify');


gulp.task('a', function() {
browserify()
    .pipe(source('./dist/libs.js').on('error', gulpUtil.log))
    .bundle(function(err, libs) {
        fs.writeFile('./dist/libs.js', libs);
    });


browserify({
    entries: ['./app.js', "./public/javascripts/services/*.js"]
})
    .external(libs)
    .bundle(function(err, main) {
        fs.writeFile('./dist/main.js', main);
    });
});

gulp.task('default', ['a']);
