const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');


// build sass
function compileSass() {
  return gulp.src('sass/**/*.scss') // Path to your SCSS files
    .pipe(sass().on('error', console.error))
    .pipe(gulp.dest('css')); // Output directory for CSS files
}
gulp.task('compile-sass', compileSass);
gulp.task('sass', compileSass);


// build less
function compileLess() {
  return gulp.src('less/**/*.less') // Path to your LESS files
    .pipe(less().on('error', console.error))
    .pipe(gulp.dest('css')); // Output directory for CSS files
}
gulp.task('compile-less', compileLess);
gulp.task('less', compileLess);


// watch sass
function watchSass() {
    gulp.watch('sass/**/*.scss', compileSass);
}
gulp.task('sass-watch', watchSass);


// watch less
function watchLess() {
    gulp.watch('less/**/*.less', compileLess);
}
gulp.task('less-watch', watchLess);
