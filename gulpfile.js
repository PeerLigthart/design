var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var bower = require('gulp-bower');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var config = {
    sassPath:                       './src/styles',
    imgPath:                        './src/images',
    jsPath:                         './src/scripts',
    fontPath:                       './src/fonts',

    assetsFolderName:               'dist',
    docsFolderName:                 'docs'
}

var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src([
        config.jsPath + '/partials/*.js'
    ])
    .pipe(concat('script.js')).pipe(uglify())
    .pipe(gulp.dest('./' + config.assetsFolderName + '/js/'))
    .pipe(gulp.dest('./' + config.docsFolderName + '/js/'));
});

gulp.task('scripts-vendor', function() {
    return gulp.src([
        config.jsPath + '/vendor/jquery-1.11.3.js',
        config.jsPath + '/vendor/browser.js',
        config.jsPath + '/vendor/select2.js',
        config.jsPath + '/vendor/jquery.caret.js',
        config.jsPath + '/vendor/jquery.payment.js',
        config.jsPath + '/vendor/jquery.mobilePhoneNumber.js'
    ])
    .pipe(concat('vendor.js')).pipe(uglify())
    .pipe(gulp.dest('./' + config.assetsFolderName + '/js/'))
    .pipe(gulp.dest('./' + config.docsFolderName + '/js/'));
});

gulp.task('styles', function() {
    return gulp.src(config.sassPath + '/ui.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./' + config.assetsFolderName + '/css/'))
    .pipe(gulp.dest('./' + config.docsFolderName + '/css/'));
});

gulp.task('images', function() {
    return gulp.src(config.imgPath + '/**/*')
    .pipe(gulp.dest('./' + config.assetsFolderName + '/img/'))
    .pipe(gulp.dest('./' + config.docsFolderName + '/img/'));
});

gulp.task('fonts', function() {
    return gulp.src(config.fontPath + '/**/*')
    .pipe(gulp.dest('./' + config.assetsFolderName + '/fonts/'))
    .pipe(gulp.dest('./' + config.docsFolderName + '/fonts/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['styles']);
    gulp.watch(config.imgPath + '/**/*', ['images']);
    gulp.watch(config.jsPath + '/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'scripts-vendor', 'images', 'fonts', 'watch']);
gulp.task('build', ['styles', 'scripts', 'scripts-vendor', 'images', 'fonts']);
