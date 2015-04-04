gulp = require 'gulp'
coffee = require 'gulp-coffee'
uglify = require 'gulp-uglify'

paths =
  scripts: 'src/**/*.coffee'
  bundle: '.build/main.jsbundle'

gulp.task 'scripts', ->
  gulp.src paths.scripts
    .pipe coffee bare: true
    .pipe gulp.dest('.build/')
    .pipe gulp.dest '.build/'

gulp.task 'release', ->
  gulp.src paths.bundle
    .pipe uglify()
    .pipe gulp.dest 'iOS/'

gulp.task 'watch', ->
  gulp.watch paths.scripts, ['scripts']
