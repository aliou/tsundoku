var gulp = require('gulp');

var nodemon = require('gulp-nodemon');

gulp.task('serve', function() {
  nodemon({ script: './app/server.js', ext: 'js', ignore: ['public/*'] })
});

gulp.task('default', ['serve']);
