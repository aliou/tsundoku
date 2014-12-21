var gulp = require('gulp');

var bower      = require('main-bower-files');
var concat     = require('gulp-concat');
var filter     = require('gulp-filter');
var minifycss  = require('gulp-minify-css');
var ngA        = require('gulp-ng-annotate');
var nodemon    = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');

var filters = {
  js:  filter('*.js'),
  css: filter('*.css')
};

gulp.task('vendor-js', function() {
  return gulp.src(bower())
    .pipe(filters.js)
    .pipe(sourcemaps.init())
    .pipe(ngA())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('vendor-css', function() {
  return gulp.src(bower())
    .pipe(filters.css)
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.css'))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('vendor', ['vendor-js', 'vendor-css']);

gulp.task('app-js', function() {
  return gulp.src('./public/js/**/*.js')
    .pipe(ngA())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('app-css', function() {
  return gulp.src('./public/css/*.css')
    .pipe(concat('style.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('app', ['app-js', 'app-css']);

gulp.task('watch', function() {
  gulp.watch('./public/js/**/*.js', ['app-js'], function() {});
  gulp.watch('./public/css/*.css',  ['app-css'],   function() {});
});

gulp.task('serve', function() {
  return nodemon({ script: './app/server.js' })
    .on('start', ['watch'])
    .on('change', ['watch']);
});

gulp.task('default', ['serve']);
