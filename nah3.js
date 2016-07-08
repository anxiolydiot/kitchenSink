var allDeps = require('./mainA.js')
var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var rda = require('require-dir-all');
var gulpUtil = require('gulp-util');
var plumber = require('gulp-plumber');
var gulpIgnore = require('gulp-ignore');
var _ = require('lodash');
/// require mainA.allDeps and use rda to compile

gulp.task('depMods', function(){
  var deps = glob.sync(rda(allDeps, {recursive: true,
  includeFiles:  /^.*\.(js|json|coffee|ts|jsx)$/

}))

// (/^.*\/some-directory[\/]?/);
  return browserify({
  entries: deps
})
.pipe(plumber())
.on('error', gulpUtil.log)
.bundle().on('error', gulpUtil.log)
.pipe(source('gulpedDepsBundle.js')).on('error', gulpUtil.log)
.pipe(gulp.dest('./public/javascripts/'))
});

gulp.task('myMods', function() {
    return browserify('./mainA.js')
        // .pipe(plumber())
        .bundle()
        .pipe(source('gulpedMineBundle.js'))
        .pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('poly', function(){
  return gulp.src([
      './public/javascripts/gulpedMineBundle.js',
      './public/javascripts/gulpedMineBundle.js'

  ])
  .pipe(concat('allBundle.js'))
  .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('default', ['depMods', 'myMods', 'poly']);
