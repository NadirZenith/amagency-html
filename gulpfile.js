var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
/*var less = require('gulp-less-sourcemap');*/
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
    gulp.src([
        'src/js/libs/jquery.easing.min.js',
        'src/js/libs/jquery.fittext.js',
        'src/js/libs/wow.min.js',
        'src/js/*.js'
    ])
            .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
    gulp.src(['src/less/main.less'])
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/build'));
});

gulp.task('default', function () {
    gulp.run('scripts', 'styles');

    gulp.watch('src/js/**', function (event) {
        gulp.run('scripts');
    });

    gulp.watch('src/less/**', function (event) {
        gulp.run('styles');
    });

});