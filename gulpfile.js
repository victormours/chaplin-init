var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('buildCss', function () {
    return gulp.src('src/public/scss/app.scss')
        .pipe(sass({
          loadPath: "bower_components/foundation/scss",
        }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/public/css'));
});

gulp.task('buildJs', function () {
  return gulp.src(['bower_components/foundation/js/foundation.min.js',
                 'bower_components/modernizr/modernizr.js',
                 'bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('dist/public/js'));

})

gulp.task('buildTemplates', function () {
  return gulp.src('src/templates/*')
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('buildChaplin', function () {
  return gulp.src(['src/routes.json', 'src/chaplin_config.json', 'src/templates/*'])
        .pipe(gulp.dest('dist'));
});

gulp.task('build', function () {
  return gulp.start('buildChaplin', 'buildTemplates', 'buildCss');
})
