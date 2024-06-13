const gulp               = require('gulp');
const less               = require('gulp-less');
const lessPluginCleanCss = require('less-plugin-clean-css');
const cleanCSSPlugin     = new lessPluginCleanCss({advanced: true});


// build less
function compileLess() {
  return gulp.src('less/**/compiled.less') // Path to your LESS files
    .pipe(less({
      plugins: [cleanCSSPlugin]
    }).on('error', console.error))
    .pipe(gulp.dest('css')); // Output directory for CSS files
}
gulp.task('compile-less', compileLess);
gulp.task('less', compileLess);


// watch less
function watchLess() {
    gulp.watch('less/**/*.less', gulp.series('less'));
}
gulp.task('less-watch', watchLess);
