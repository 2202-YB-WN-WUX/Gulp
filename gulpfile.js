// declare the gulp dependency
const gulp = require('gulp');

// Set up js-hint
const jshint = require('gulp-jshint');

// Our task
gulp.task('jshint', () => {
    // run the gulp task on our script
    return gulp.src('js/script.js')
        // telling gulp that we're using es6
        // pipe is like a .then, it runs something after something 
        .pipe(jshint({ "esversion": 6 }))
        //plug in the styles we downloaded from NPM (stylish reporter)
        .pipe(jshint.reporter('jshint-stylish'))
})