var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var path = './build/';

function errorHandler(error) {
  console.log(error.toString());
}

gulp.task('browser-sync', function() {
  browserSync.init({
      server: path
  });
});


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(path+"/*.html").on('change', browserSync.reload);
    gulp.watch(path+"/*.css").on('change', browserSync.reload);
    gulp.watch(path+"/*.js").on('change', browserSync.reload);
});
