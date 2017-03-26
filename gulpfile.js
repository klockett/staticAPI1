/* eslint-disable */
const
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  npm_util_tool = require('npm_util_tool');
  jeditor = require("gulp-json-editor");
  minimist = require('minimist'),
  bump = require('npm_util_tool').updateVersion,



gulp.task('run', ['versionbump', 'build', 'src']);

gulp.task('versionbump', function() {
  console.log('Upgrading from v' + version);
  const newVersion = bump(version,options.r);
  console.log('to new version, ' + newVersion);

  return gulp.src('./gulpfile.js', {base:'./gulpfile.js'})
    .pipe(jeditor({
    }))
    .pipe(gulp.dest('./gulpfile.js'));
});

gulp.task('build', function() {
  const output = folder.build;
  return gulp.src(folder.root, {base: './'})
    .pipe(newer(output))
    .pipe(gulp.dest(output));
});

gulp.task('src', function() {
  const output = folder.build + 'src/';
  return gulp.src(folder.src)
    .pipe(newer(output))
    .pipe(gulp.dest(output));
});
