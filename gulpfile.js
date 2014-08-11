var gulp = require('gulp');
var shell = require('gulp-shell');
var concat = require('gulp-concat');
var react = require('gulp-react');

gulp.task('jsx', function(){
    return gulp.src("app/*.jsx")
        .pipe(react())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['jsx'], shell.task([
    'jspm bundle build/router'
]));
