
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

exports.build = buildStyles