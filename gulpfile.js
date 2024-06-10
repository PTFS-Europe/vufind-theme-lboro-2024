const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


// build sass
function compileSass() {
  return gulp.src('sass/**/*.scss') // Path to your SCSS files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css')); // Output directory for CSS files
}
gulp.task('compile-sass', compileSass);
gulp.task('sass', compileSass);


// watch sass
function watchSass() {
    gulp.watch('scss/**/*.scss', compileSass);
}
gulp.task('sass-watch', watchSass);
