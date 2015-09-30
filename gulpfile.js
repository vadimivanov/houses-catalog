var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    minifyCss = require('gulp-minify-css');

var links = [
    'common/app.js',
    'common/app.router.js',
    'components/modal.js',
    'services/messages.service.js',
    'services/services.js',
    'views/create_house/create_house.js',
    'views/edit_floor/edit_floor.js',
    'views/edit_house/edit_house.js',
    'views/header/header.js',
    'views/home/home.js',
    'views/login/login.js',
    'views/review_house/review_house.js',
    'views/select_items/select_items.js'
];


gulp.task('compress-libs', function() {
    return gulp.src('libs/*.js')
        .pipe(uglify())
        .pipe(concat('libs-min.js'))
        .pipe(gulp.dest('build/libs/'));
});
gulp.task('compress-views', function() {
     gulp.src(links)
        .pipe(uglify())
        .pipe(concat('build.js'))
        .pipe(gulp.dest('build/components/'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(minifyCss(""))
        .pipe(gulp.dest('build/css/'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('css/*.css', ['css']);
//    gulp.watch('dev/public/source/components/**/*.js', ['compress-views']);
});

gulp.task('default', ['compress-views', 'css','compress-libs', 'watch']);
