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

gulp.task('buildTemplates', function () {
  return gulp.src('src/templates/*')
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('buildChaplin', function () {
  return gulp.src(['src/routes.json', 'src/chaplin_config.json', 'src/templates/*'])
        .pipe(gulp.dest('dist'));
});
