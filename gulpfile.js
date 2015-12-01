var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify');

/**
 * Running livereload server
 */
gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
})

/**
 * Sass compilation
 */
.task('sass', function() {
  return gulp.src('./css/*.sass')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'));
})
.task('sass:min', function() {
  return gulp.src('./css/*.sass')
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./css'));
})

/** JavaScript compilation */
.task('js', function() {
  return browserify('./js/app.js')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js'));
})
.task('js:min', function() {
  return browserify('./js/app.js')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.min.js'))
    .pipe(buffer())
    .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end();}))
    .pipe(gulp.dest('./js'));
})

/**
 * Compiling resources and serving application
 */
.task('serve', ['sass', 'js'], function() {
  return gulp.watch([
    './js/**/*.js', 'index.html', './css/**/*.sass'
  ], [
    'sass', 'js', browserSync.reload
  ]);
})
.task('serve:minified', ['sass:min', 'js:min'], function() {
  return gulp.watch([
    './js/**/*.js', 'index.html', './css/**/*.sass'
  ], [
    'sass:min', 'js:min', browserSync.reload
  ]);
});