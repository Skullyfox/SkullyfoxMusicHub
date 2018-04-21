'use strict';

const   gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        concat          = require('gulp-concat'),
        autoprefixer    = require('gulp-autoprefixer'),
        rename          = require('gulp-rename'),
        sourcemaps      = require('gulp-sourcemaps');

const   browserSync     = require('browser-sync');

gulp.task('build-sass', () => {
    return gulp.src(['src/scss/app.sass'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('concat-js', () =>{
    return gulp.src(['src/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js'))
});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('start', ['browserSync', 'build-sass'], function(){
    gulp.watch('src/scss/*',['build-sass']);
    gulp.watch('src/js/**/*.js',['concat-js'])
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('build/js/*.js', browserSync.reload);
});