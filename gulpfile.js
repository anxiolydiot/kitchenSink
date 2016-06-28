var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var browserify = require('browserify');
var glob = require('glob');
var es = require('event-stream');
var gulpUtil = require('gulp-util');
var ignore = require('gulp-ignore');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');


gulp.task('jsBundle', function() {

    glob('./public/javascripts/**/*.js', function(err, files) {
        if(err) done(err, gulpUtil.log);

        var tasks = files.map(function(entry) {
            return browserify({ entries: [entry] })
                .bundle().on('error', gulpUtil.log)
                .pipe(source('dist/tempBundle.js').on('error', gulpUtil.log))
                .pipe(ignore.exclude([ './public/jquery/**/*.map',
                './public/javascripts/jquery/**/*.js',
                './public/javascripts/jquery-ui/*.js',
                './public/javascripts/jquery-ui/**/*.js',
                './public/javascripts/ngmap/jsdoc/**/*.js'])
                .on('error', gulpUtil.log))
                .pipe(gulp.dest('src'));
            });

    });
});

gulp.task('default', ['jsBundle'], function() {
  return gulp.src([
    './app.js',
    'dist/tempBundle.js'
  ])
  .pipe(concat('allBundle.js'))
  .pipe(gulp.dest('dist'));
});
