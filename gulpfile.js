const gulp = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
  return gulp.src('sass/**/*.scss') // Path to your SCSS files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css')); // Output directory for CSS files
}
gulp.task('sass', compileSass);
