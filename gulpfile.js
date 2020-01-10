var gulp = require('gulp')
  ,clean = require('gulp-clean')
  ,browserSync = require('browser-sync')
  ,jshint = require('gulp-jshint')
  ,jshintStylish = require('jshint-stylish')
  ,csslint = require('gulp-csslint')
  ,autoprefixer = require('gulp-autoprefixer')
  ,sass = require('gulp-sass');

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/js/*.js').on('change', function(event) {
      gulp.src(event.path)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish));
    });

    gulp.watch('src/scss/*.scss').on('change', function(event) {
      gulp.src(event.path)
        .pipe(sass().on('error', function (erro) {
          console.log('SASS, erro de compilação: ' + event.filename);
          console.log(erro.message);
        }))
        .pipe(gulp.dest('src/css'));
    });

    gulp.watch('src/css/*.css').on('change', function(event) {
      gulp.src(event.path)
        .pipe(csslint())
        .pipe(csslint.reporter());
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);

});