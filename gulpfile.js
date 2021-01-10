const gulp = require('gulp');
const htmlImport = require('gulp-html-imports');
const less = require('gulp-less');
const browserSync = require('browser-sync');

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(htmlImport('./src/components/'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('less', function () {
  return gulp.src('src/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('build/styles'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('copy', function () {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('build/assets'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('data', function () {
  return gulp.src('src/data/**/*')
    .pipe(gulp.dest('build/data'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function () {
  return gulp.src('src/scripts/**/*.js')
    .pipe(gulp.dest('build/scripts'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('models', function () {
  return gulp.src('src/models/**/*.js')
    .pipe(gulp.dest('build/models'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', function () {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  });

  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/styles/**/*.less', gulp.series('less'));
  gulp.watch('src/assets/**/*', gulp.series('copy'));
  gulp.watch('src/scripts/**/*.js', gulp.series('js'));
  gulp.watch('src/data/**/*.json', gulp.series('data'));
  gulp.watch('src/models/**/*.js', gulp.series('models'));
});
