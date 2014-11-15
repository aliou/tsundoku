var gulp = require('gulp');

var bower      = require('main-bower-files');
var concat     = require('gulp-concat');
var filter     = require('gulp-filter');
var minifycss  = require('gulp-minify-css');
var ngA        = require('gulp-ng-annotate');
var nodemon    = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');

var filters = { js: filter('*.js'), css: filter('*.css') };

gulp.task('serve', function() {
  nodemon({ script: './app/server.js', ext: 'js', ignore: ['public/*'] })
});

gulp.task('vendor', function() {
  return gulp.src(bower())
    .pipe(filters.js)
    .pipe(sourcemaps.init())
    .pipe(ngA())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/dist/'))
    .pipe(filters.js.restore())
    .pipe(filters.css)
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.css'))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('app', function() {
  return gulp.src('./public/js/**/*.js')
    .pipe(ngA())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('default', ['serve']);
